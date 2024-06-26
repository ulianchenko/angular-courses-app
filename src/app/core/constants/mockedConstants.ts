import { Course } from 'src/app/courses/models/course.model';

const mockedCoursesList: Course[] = [
  {
    id: 8693,
    name: 'duis mollit reprehenderit ad',
    description:
      'Est minim ea aute sunt laborum minim eu excepteur. Culpa sint exercitation mollit enim ad culpa aliquip laborum cillum. Dolor officia culpa labore ex eiusmod ut est ea voluptate ea nostrud.',
    isTopRated: false,
    date: '2023-07-01T04:39:24+00:00',
    authors: [
      {
        id: 1370,
        name: 'Polly',
        lastName: 'Sosa'
      }
    ],
    length: 157
  },
  {
    id: 4980,
    name: 'magna excepteur aute deserunt',
    description:
      'Sunt culpa officia minim commodo eiusmod irure sunt nostrud. Mollit aliquip id occaecat officia proident anim dolor officia qui voluptate consectetur laborum. Duis incididunt culpa aliqua mollit do fugiat ea dolor mollit irure Lorem tempor.',
    isTopRated: false,
    date: '2023-07-19T02:02:36+00:00',
    authors: [
      {
        id: 8413,
        name: 'Greta',
        lastName: 'Richardson'
      },
      {
        id: 7458,
        name: 'Deana',
        lastName: 'Bruce'
      },
      {
        id: 5508,
        name: 'Patsy',
        lastName: 'Bright'
      }
    ],
    length: 207
  },
  {
    id: 4282,
    name: 'sit voluptate eiusmod ea',
    description:
      'Commodo id sunt sunt adipisicing et aliquip voluptate laborum consectetur. Occaecat nisi sint exercitation ullamco adipisicing irure est in consectetur aute voluptate. Ea pariatur dolor anim ea reprehenderit ut non occaecat magna adipisicing exercitation nisi consequat.',
    isTopRated: true,
    date: '2017-03-25T12:57:37+00:00',
    authors: [
      {
        id: 3618,
        name: 'Laura',
        lastName: 'Kirby'
      },
      {
        id: 9064,
        name: 'Quinn',
        lastName: 'Cain'
      }
    ],
    length: 197
  },
  {
    id: 1936,
    name: 'reprehenderit est veniam elit',
    description:
      'Consectetur veniam non nulla in laboris minim ipsum. Dolor aliqua irure sint do irure magna tempor culpa quis. Deserunt amet occaecat velit sit.',
    isTopRated: true,
    date: '2016-03-18T06:36:07+00:00',
    authors: [
      {
        id: 9926,
        name: 'Burt',
        lastName: 'Holland'
      },
      {
        id: 6440,
        name: 'Andrews',
        lastName: 'Byers'
      },
      {
        id: 8509,
        name: 'Shawn',
        lastName: 'Craig'
      }
    ],
    length: 232
  },
  {
    id: 2006,
    name: 'reprehenderit eiusmod nostrud amet',
    description:
      'Est consequat deserunt officia fugiat culpa in aliquip consectetur. Est nostrud occaecat cillum elit officia officia ea magna et minim officia commodo sunt. Deserunt duis minim magna nostrud enim enim commodo sit elit nostrud cillum aliquip est qui.',
    isTopRated: true,
    date: '2017-01-18T19:10:51+00:00',
    authors: [
      {
        id: 21,
        name: 'Maddox',
        lastName: 'Diaz'
      },
      {
        id: 800,
        name: 'Glenda',
        lastName: 'Juarez'
      },
      {
        id: 1772,
        name: 'Hilda',
        lastName: 'Gaines'
      },
      {
        id: 3003,
        name: 'Abbott',
        lastName: 'Mckay'
      }
    ],
    length: 42
  },
  {
    id: 1672,
    name: 'officia exercitation tempor officia',
    description:
      'Laborum reprehenderit tempor do cillum ipsum consequat deserunt. In enim amet laboris occaecat sit cillum. Voluptate tempor consequat incididunt non pariatur eiusmod sint duis est.',
    isTopRated: false,
    date: '2017-06-06T00:07:32+00:00',
    authors: [
      {
        id: 1167,
        name: 'Garrison',
        lastName: 'Chambers'
      },
      {
        id: 9215,
        name: 'Ofelia',
        lastName: 'Rodgers'
      },
      {
        id: 978,
        name: 'Avila',
        lastName: 'Bolton'
      }
    ],
    length: 52
  },
  {
    id: 3946,
    name: 'nisi ex incididunt aliquip',
    description:
      'Commodo excepteur velit in consectetur sit esse Lorem occaecat labore laboris et. Deserunt fugiat ea aliquip labore culpa fugiat labore incididunt. Duis ex mollit quis aliquip eiusmod.',
    isTopRated: false,
    date: '2016-11-03T04:24:34+00:00',
    authors: [
      {
        id: 612,
        name: 'Pam',
        lastName: 'Vazquez'
      },
      {
        id: 6050,
        name: 'Norman',
        lastName: 'Love'
      },
      {
        id: 2252,
        name: 'Reba',
        lastName: 'Perez'
      }
    ],
    length: 31
  },
  {
    id: 8464,
    name: 'minim amet proident est',
    description:
      'Fugiat velit aliquip quis veniam culpa consequat fugiat voluptate magna exercitation eiusmod sit qui. Dolor nostrud enim commodo non eu ut nostrud aliquip aute anim ex veniam eiusmod esse. Eu nulla non dolore et voluptate labore ipsum est sit nisi qui.',
    isTopRated: true,
    date: '2017-07-07T10:38:59+00:00',
    authors: [
      {
        id: 5524,
        name: 'Cobb',
        lastName: 'Hudson'
      },
      {
        id: 5341,
        name: 'Nettie',
        lastName: 'Sanford'
      },
      {
        id: 7333,
        name: 'Michele',
        lastName: 'Cunningham'
      }
    ],
    length: 269
  },
  {
    id: 5834,
    name: 'nulla eu ex aute',
    description:
      'Aute anim dolore duis quis ut reprehenderit dolore nostrud duis est cupidatat consequat. Ea ipsum duis esse est ullamco nulla sunt culpa. Proident Lorem ipsum Lorem incididunt deserunt dolore.',
    isTopRated: false,
    date: '2016-04-30T18:46:36+00:00',
    authors: [
      {
        id: 8318,
        name: 'Rowland',
        lastName: 'Vasquez'
      }
    ],
    length: 310
  },
  {
    id: 9664,
    name: 'proident do non aute',
    description:
      'Ut aliqua exercitation in sit non adipisicing amet. Occaecat et fugiat minim officia ut in non et nulla. Nisi incididunt culpa ad magna do laboris.',
    isTopRated: true,
    date: '2017-02-18T22:01:43+00:00',
    authors: [
      {
        id: 4441,
        name: 'Willa',
        lastName: 'Cortez'
      },
      {
        id: 9562,
        name: 'Dejesus',
        lastName: 'Snow'
      },
      {
        id: 4998,
        name: 'Doyle',
        lastName: 'Webster'
      },
      {
        id: 2138,
        name: 'Torres',
        lastName: 'Farley'
      }
    ],
    length: 274
  },
  {
    id: 8194,
    name: 'adipisicing magna exercitation ea',
    description:
      'Duis aliquip ut et irure. Ad excepteur elit quis non aliquip tempor voluptate cillum. Reprehenderit proident sint enim consectetur ad duis velit aute cillum ullamco dolore nostrud magna amet.',
    isTopRated: false,
    date: '2016-09-09T12:00:31+00:00',
    authors: [
      {
        id: 3509,
        name: 'Jessie',
        lastName: 'Kelly'
      },
      {
        id: 7653,
        name: 'Miranda',
        lastName: 'Christian'
      },
      {
        id: 6185,
        name: 'Yvette',
        lastName: 'Foster'
      },
      {
        id: 5186,
        name: 'Russell',
        lastName: 'Butler'
      }
    ],
    length: 71
  },
  {
    id: 5688,
    name: 'ex laborum est cupidatat',
    description:
      'Quis tempor eiusmod esse id minim anim. Ut ipsum deserunt non mollit excepteur laborum ex occaecat labore dolore cupidatat elit. Incididunt fugiat sint eu Lorem culpa tempor nisi nostrud nisi.',
    isTopRated: false,
    date: '2017-11-18T09:06:11+00:00',
    authors: [
      {
        id: 9364,
        name: 'Berger',
        lastName: 'Powell'
      },
      {
        id: 3477,
        name: 'Daugherty',
        lastName: 'Guy'
      },
      {
        id: 2005,
        name: 'Dotson',
        lastName: 'Hernandez'
      }
    ],
    length: 171
  },
  {
    id: 2698,
    name: 'aute do ipsum sint',
    description:
      'Quis laboris laboris nostrud cupidatat sit labore sint amet ipsum elit deserunt in tempor. Excepteur dolor elit enim nostrud consequat eu ullamco ullamco pariatur consectetur duis voluptate. Irure laborum occaecat id veniam culpa aliqua dolor cupidatat enim sunt fugiat.',
    isTopRated: true,
    date: '2017-07-14T10:57:08+00:00',
    authors: [
      {
        id: 1416,
        name: 'Ashlee',
        lastName: 'Hines'
      }
    ],
    length: 191
  },
  {
    id: 3747,
    name: 'fugiat sunt aliqua aute',
    description:
      'Enim commodo elit fugiat deserunt labore deserunt qui. Qui velit tempor quis eu irure qui adipisicing magna cupidatat ad ea ex tempor minim. Voluptate enim laboris aute nulla quis nisi sint esse.',
    isTopRated: false,
    date: '2017-10-27T01:46:08+00:00',
    authors: [
      {
        id: 5907,
        name: 'Jacobson',
        lastName: 'Riddle'
      },
      {
        id: 8339,
        name: 'Claire',
        lastName: 'Battle'
      },
      {
        id: 2017,
        name: 'Orr',
        lastName: 'Conrad'
      },
      {
        id: 7614,
        name: 'Moody',
        lastName: 'Cash'
      }
    ],
    length: 41
  },
  {
    id: 6605,
    name: 'adipisicing culpa esse consequat',
    description:
      'Do enim consequat nisi elit nostrud laborum et. Excepteur minim eu eiusmod minim ullamco aute in velit officia enim. Proident incididunt quis ex nulla amet nisi deserunt fugiat.',
    isTopRated: false,
    date: '2016-12-11T18:16:42+00:00',
    authors: [
      {
        id: 4165,
        name: 'Gilda',
        lastName: 'Huff'
      }
    ],
    length: 119
  },
  {
    id: 6703,
    name: 'esse veniam labore labore',
    description:
      'Amet mollit duis et excepteur. Esse amet non et nisi velit esse ex aute do excepteur reprehenderit. Ipsum voluptate cupidatat quis et exercitation irure elit sint amet.',
    isTopRated: false,
    date: '2016-03-21T19:22:57+00:00',
    authors: [
      {
        id: 4290,
        name: 'Latonya',
        lastName: 'Hester'
      },
      {
        id: 9190,
        name: 'Gregory',
        lastName: 'Ratliff'
      },
      {
        id: 2309,
        name: 'Williamson',
        lastName: 'Phillips'
      },
      {
        id: 5583,
        name: 'Katharine',
        lastName: 'Hopkins'
      }
    ],
    length: 358
  },
  {
    id: 4276,
    name: 'nulla veniam ad Lorem',
    description:
      'Cupidatat eu aliquip magna anim do nulla duis cillum aliquip pariatur cupidatat. Tempor voluptate eu ipsum voluptate do deserunt tempor excepteur Lorem ipsum incididunt incididunt. Mollit incididunt amet tempor dolor tempor commodo ea laboris laborum exercitation occaecat ex.',
    isTopRated: false,
    date: '2016-11-13T19:23:11+00:00',
    authors: [
      {
        id: 1980,
        name: 'Leona',
        lastName: 'Bailey'
      },
      {
        id: 5365,
        name: 'Edwards',
        lastName: 'Nunez'
      }
    ],
    length: 52
  },
  {
    id: 5,
    name: 'aliquip nulla nostrud occaecat',
    description:
      'Fugiat tempor commodo laboris duis voluptate sint tempor in. Adipisicing enim Lorem sint enim ipsum adipisicing velit amet qui labore voluptate tempor nulla. Aliqua sit cillum ea officia.',
    isTopRated: false,
    date: '2016-08-13T02:14:40+00:00',
    authors: [
      {
        id: 3455,
        name: 'Leah',
        lastName: 'Sweet'
      },
      {
        id: 3060,
        name: 'Landry',
        lastName: 'Valdez'
      },
      {
        id: 8635,
        name: 'Juliana',
        lastName: 'Holden'
      },
      {
        id: 7407,
        name: 'Price',
        lastName: 'Britt'
      }
    ],
    length: 55
  },
  {
    id: 5829,
    name: 'est cillum aliqua est',
    description:
      'Laborum elit ut amet ut ea eu est nisi qui esse deserunt deserunt. Ipsum duis deserunt velit et sunt deserunt cillum duis esse cupidatat adipisicing exercitation excepteur fugiat. Voluptate veniam ipsum deserunt minim labore qui aliquip laboris irure magna nisi.',
    isTopRated: false,
    date: '2017-05-13T09:35:20+00:00',
    authors: [
      {
        id: 248,
        name: 'Millie',
        lastName: 'Schneider'
      },
      {
        id: 3517,
        name: 'Burke',
        lastName: 'Eaton'
      }
    ],
    length: 284
  },
  {
    id: 9817,
    name: 'voluptate labore id voluptate',
    description:
      'Ullamco veniam ea eu ad laborum nisi tempor qui ullamco. Irure officia labore irure in id fugiat sint labore esse. Officia reprehenderit ut ea dolore excepteur do.',
    isTopRated: true,
    date: '2017-03-18T16:27:27+00:00',
    authors: [
      {
        id: 7827,
        name: 'Lorna',
        lastName: 'Joyce'
      },
      {
        id: 8335,
        name: 'Ronda',
        lastName: 'Dean'
      },
      {
        id: 57,
        name: 'Lola',
        lastName: 'Glass'
      },
      {
        id: 4831,
        name: 'Noreen',
        lastName: 'Sullivan'
      }
    ],
    length: 226
  },
  {
    id: 7454,
    name: 'ipsum cupidatat elit qui',
    description:
      'Nostrud cupidatat aliquip pariatur incididunt irure proident cillum officia ex elit veniam est et officia. Consectetur ad adipisicing exercitation cillum excepteur voluptate dolor enim quis irure non. Est tempor sit et mollit adipisicing nisi enim labore proident veniam labore Lorem nulla labore.',
    isTopRated: false,
    date: '2016-05-29T11:05:03+00:00',
    authors: [
      {
        id: 3343,
        name: 'Margie',
        lastName: 'Cote'
      }
    ],
    length: 283
  },
  {
    id: 8476,
    name: 'ea est ex veniam',
    description:
      'Nostrud incididunt veniam consectetur cillum. Pariatur culpa dolor esse elit aliqua duis. Adipisicing exercitation nostrud ullamco occaecat ut et.',
    isTopRated: true,
    date: '2017-09-08T19:51:30+00:00',
    authors: [
      {
        id: 441,
        name: 'Vance',
        lastName: 'Reynolds'
      }
    ],
    length: 346
  },
  {
    id: 6240,
    name: 'sint voluptate Lorem laboris',
    description:
      'Tempor aute enim qui irure. Culpa elit ut nulla qui dolore eiusmod eiusmod incididunt commodo ipsum. Anim quis exercitation sint officia laborum officia.',
    isTopRated: false,
    date: '2017-08-15T15:27:05+00:00',
    authors: [
      {
        id: 9101,
        name: 'Singleton',
        lastName: 'Ellison'
      },
      {
        id: 638,
        name: 'Weeks',
        lastName: 'Santos'
      }
    ],
    length: 267
  },
  {
    id: 5110,
    name: 'voluptate tempor tempor sit',
    description:
      'Est veniam cupidatat culpa quis in. Nulla dolor duis culpa eiusmod duis ea irure laboris mollit proident. Eu minim esse cillum eu incididunt minim.',
    isTopRated: false,
    date: '2017-11-05T23:17:58+00:00',
    authors: [
      {
        id: 8781,
        name: 'Carson',
        lastName: 'Suarez'
      },
      {
        id: 3399,
        name: 'Schmidt',
        lastName: 'Cooke'
      }
    ],
    length: 59
  },
  {
    id: 3001,
    name: 'aliquip enim eiusmod reprehenderit',
    description:
      'Velit irure ut do dolore aliquip fugiat qui labore irure do officia ullamco. Excepteur quis tempor eu sint dolor occaecat. Nulla aliquip labore ad ut occaecat id.',
    isTopRated: false,
    date: '2017-11-01T00:46:22+00:00',
    authors: [
      {
        id: 7987,
        name: 'Anthony',
        lastName: 'Mcguire'
      },
      {
        id: 80,
        name: 'Knight',
        lastName: 'York'
      },
      {
        id: 5892,
        name: 'Hope',
        lastName: 'Boyer'
      },
      {
        id: 7134,
        name: 'Kim',
        lastName: 'Brewer'
      }
    ],
    length: 155
  },
  {
    id: 7349,
    name: 'ullamco irure et magna',
    description:
      'Amet nostrud fugiat consequat mollit adipisicing pariatur incididunt. Eiusmod magna sit ea sunt officia anim consequat incididunt non minim non. Aute tempor proident veniam duis ex consequat dolor Lorem aliquip nulla veniam consectetur.',
    isTopRated: false,
    date: '2016-05-23T19:39:12+00:00',
    authors: [
      {
        id: 3121,
        name: 'Twila',
        lastName: 'Jennings'
      },
      {
        id: 6880,
        name: 'Irma',
        lastName: 'Martinez'
      },
      {
        id: 6039,
        name: 'Mcgowan',
        lastName: 'Nelson'
      },
      {
        id: 8235,
        name: 'Parks',
        lastName: 'Mack'
      }
    ],
    length: 280
  },
  {
    id: 8324,
    name: 'sint ipsum laboris id',
    description:
      'Fugiat anim eu duis nulla. Consectetur tempor sint nisi ex laborum. Et voluptate nulla est nostrud velit ipsum minim nostrud proident aliquip exercitation commodo quis.',
    isTopRated: true,
    date: '2016-12-03T04:50:39+00:00',
    authors: [
      {
        id: 1861,
        name: 'Michael',
        lastName: 'Stout'
      },
      {
        id: 9950,
        name: 'Roy',
        lastName: 'George'
      },
      {
        id: 3907,
        name: 'Macdonald',
        lastName: 'Ward'
      },
      {
        id: 4388,
        name: 'Oneil',
        lastName: 'Carlson'
      }
    ],
    length: 390
  },
  {
    id: 5848,
    name: 'sint velit ullamco do',
    description:
      'Deserunt nulla nisi tempor ea tempor officia qui occaecat consectetur aliqua esse occaecat. Cillum anim veniam pariatur sint. Lorem Lorem aute anim culpa duis commodo officia labore laborum eiusmod qui irure amet pariatur.',
    isTopRated: true,
    date: '2017-10-07T09:23:08+00:00',
    authors: [
      {
        id: 2700,
        name: 'Wynn',
        lastName: 'Knowles'
      },
      {
        id: 1048,
        name: 'Casey',
        lastName: 'Terry'
      },
      {
        id: 5187,
        name: 'Etta',
        lastName: 'Key'
      },
      {
        id: 1939,
        name: 'Hilary',
        lastName: 'Mcdowell'
      }
    ],
    length: 46
  },
  {
    id: 348,
    name: 'nulla deserunt ut ipsum',
    description:
      'Irure aliqua culpa ea Lorem ea laboris enim exercitation excepteur ex nulla minim ut. Est cupidatat quis officia occaecat enim reprehenderit mollit nisi. Elit proident consectetur laboris sit anim minim occaecat pariatur aute culpa duis deserunt culpa eiusmod.',
    isTopRated: false,
    date: '2017-04-14T08:15:30+00:00',
    authors: [
      {
        id: 5653,
        name: 'Leblanc',
        lastName: 'Bradley'
      }
    ],
    length: 262
  },
  {
    id: 133,
    name: 'sint sunt do elit',
    description:
      'Consequat do labore nisi ut amet pariatur fugiat ullamco minim velit irure. Excepteur labore incididunt sint ea nulla culpa aliqua non. Deserunt commodo cupidatat ex nostrud officia quis eu consequat voluptate.',
    isTopRated: false,
    date: '2017-09-19T18:41:40+00:00',
    authors: [
      {
        id: 2148,
        name: 'Joyce',
        lastName: 'Sparks'
      },
      {
        id: 728,
        name: 'Rosetta',
        lastName: 'Barton'
      },
      {
        id: 3733,
        name: 'Patti',
        lastName: 'Sampson'
      }
    ],
    length: 45
  },
  {
    id: 3,
    name: 'Test-1',
    description:
      'Test-1: Consequat do labore nisi ut amet pariatur fugiat ullamco minim velit irure. Excepteur labore incididunt sint ea nulla culpa aliqua non. Deserunt commodo cupidatat ex nostrud officia quis eu consequat voluptate.',
    isTopRated: false,
    date: '2015-09-19T18:41:40+00:00',
    authors: [
      {
        id: 2148,
        name: 'Joyce',
        lastName: 'Sparks'
      },
      {
        id: 728,
        name: 'Rosetta',
        lastName: 'Barton'
      },
      {
        id: 3733,
        name: 'Patti',
        lastName: 'Sampson'
      }
    ],
    length: 45
  },
  {
    id: 33,
    name: 'Test-2',
    description:
      'Test-2: Consequat do labore nisi ut amet pariatur fugiat ullamco minim velit irure. Excepteur labore incididunt sint ea nulla culpa aliqua non. Deserunt commodo cupidatat ex nostrud officia quis eu consequat voluptate.',
    isTopRated: false,
    date: '2015-09-20T18:41:40+00:00',
    authors: [
      {
        id: 2148,
        name: 'Joyce',
        lastName: 'Sparks'
      },
      {
        id: 728,
        name: 'Rosetta',
        lastName: 'Barton'
      },
      {
        id: 3733,
        name: 'Patti',
        lastName: 'Sampson'
      }
    ],
    length: 45
  },
  {
    id: 333,
    name: 'Test-3',
    description:
      'Test-3: Consequat do labore nisi ut amet pariatur fugiat ullamco minim velit irure. Excepteur labore incididunt sint ea nulla culpa aliqua non. Deserunt commodo cupidatat ex nostrud officia quis eu consequat voluptate.',
    isTopRated: false,
    date: '2015-09-21T18:41:40+00:00',
    authors: [
      {
        id: 2148,
        name: 'Joyce',
        lastName: 'Sparks'
      },
      {
        id: 728,
        name: 'Rosetta',
        lastName: 'Barton'
      },
      {
        id: 3733,
        name: 'Patti',
        lastName: 'Sampson'
      }
    ],
    length: 45
  }
];

const getMockedCoursesList = (): Course[] => mockedCoursesList;
export { mockedCoursesList, getMockedCoursesList };
