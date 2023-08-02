import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild,
  forwardRef
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-authors-edit',
  templateUrl: './authors-edit.component.html',
  styleUrls: ['./authors-edit.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsEditComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsEditComponent),
      multi: true
    }
  ]
})
export class AuthorsEditComponent implements ControlValueAccessor {
  @Input() authors: Author[] = [];
  @Input() form: FormGroup;
  @Input() selectedAuthors: Author[] = [];
  searchTerm = '';
  filteredAuthors: Author[] = [];
  showAutocomplete = false;
  isAutocompleteClicked = false;
  isFieldTouched = false;
  isFormDataValid = false;
  // eslint-disable-next-line no-unused-vars
  private onChange: (value: Author[] | null) => void = () => {};
  private onTouched: () => void = () => {};

  @Output() authorsChanged = new EventEmitter<Author[]>();

  @ViewChild('autocompleteInput')
  autocompleteInput!: ElementRef<HTMLInputElement>;

  // eslint-disable-next-line no-unused-vars
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.form = new FormGroup({});
  }

  searchAuthors(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filteredAuthors = this.authors.filter((author) =>
      author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.showAutocomplete = true;

    if (searchTerm !== '') {
      const inputElement = this.elementRef.nativeElement.querySelector('input');
      this.renderer.removeClass(inputElement, 'border-red-500');
      this.renderer.removeClass(inputElement, 'error');
      this.onChange(this.selectedAuthors);
    }
  }

  addAuthor(author: Author) {
    const updatedAuthors = [...this.selectedAuthors, author];
    this.onChange(updatedAuthors);
    this.selectedAuthors = updatedAuthors;
    this.onTouched();
    this.updateFormValidity();
    this.authorsChanged.emit(this.selectedAuthors);
    this.searchTerm = '';
  }

  removeAuthor(index: number) {
    const updatedAuthors = this.selectedAuthors.filter((_, i) => i !== index);
    this.onChange(updatedAuthors);
    this.selectedAuthors = updatedAuthors;
    this.onTouched();
    this.updateFormValidity();
    this.authorsChanged.emit(this.selectedAuthors);
  }

  selectAuthorFromList(event: Event, author: Author) {
    this.addAuthor(author);
    this.showAutocomplete = false;
  }

  onAutocompleteClick() {
    this.isAutocompleteClicked = true;
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: any) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    const clickedOnAutocompleteInput =
      this.autocompleteInput.nativeElement.contains(target);

    if (!clickedInside && !clickedOnAutocompleteInput) {
      if (
        !this.isAutocompleteClicked &&
        this.isFieldTouched &&
        this.selectedAuthors.length === 0
      ) {
        const inputElement =
          this.elementRef.nativeElement.querySelector('input');
        this.renderer.addClass(inputElement, 'border-red-500');
        this.renderer.addClass(inputElement, 'error');
        this.onChange(null);
        this.onTouched();
      }
      this.showAutocomplete = false;
      this.isAutocompleteClicked = false;
      this.isFieldTouched = false;
    } else if (clickedOnAutocompleteInput) {
      this.isFieldTouched = true;
    }
  }

  writeValue(value: []): void {
    this.selectedAuthors = value || [];
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  validate(): { [key: string]: boolean } | null {
    return this.selectedAuthors.length > 0 ? null : { noAuthorsSelected: true };
  }

  updateFormValidity() {
    const authorsControl = this.form.get('authors');
    const isAuthorsValid =
      authorsControl !== null && authorsControl.value.length > 0;

    this.isFormDataValid =
      this.form.valid &&
      !this.form.hasError('noAuthorsSelected') &&
      isAuthorsValid;
  }
}
