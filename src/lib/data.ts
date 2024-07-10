import { Transaction } from "@/pages/Home/_components/columns";
import { HomeIcon, LucideIcon, PieChart, User2Icon } from "lucide-react";

interface SideBarLink {
  icon: LucideIcon;
  label: string;
  route: string;
}
export const sideBarLinks: SideBarLink[] = [
  {
    icon: HomeIcon,
    label: "Home",
    route: "/",
  },
  {
    icon: User2Icon,
    label: "Users",
    route: "/users",
  },
  {
    icon: PieChart,
    label: "Analytics",
    route: "/analytics",
  },
];

export const data = [
  {
    id: "1",
    name: "Willis Sanford",
    customer_id: "728ed52f1",
    amount: 3843,
    date: "2023-08-21",
  },
  {
    id: "2",
    name: "Willis Sanford",
    customer_id: "728ed52f1",
    amount: 34,
    date: "2024-01-25",
  },
  {
    id: "3",
    name: "Willis Sanford",
    customer_id: "728ed52f1",
    amount: 43,
    date: "2023-09-11",
  },
  {
    id: "4",
    name: "Kirk Jacobs",
    customer_id: "728ed52f2",
    amount: 2492,
    date: "2022-02-05",
  },
  {
    id: "5",
    name: "Kirk Jacobs",
    customer_id: "728ed52f2",
    amount: 38,
    date: "2023-12-13",
  },
  {
    id: "6",
    name: "Kirk Jacobs",
    customer_id: "728ed52f2",
    amount: 460,
    date: "2023-03-16",
  },
  {
    id: "7",
    name: "Lorraine Considine",
    customer_id: "728ed52f3",
    amount: 54,
    date: "2024-05-09",
  },
  {
    id: "8",
    name: "Lorraine Considine",
    customer_id: "728ed52f3",
    amount: 1333,
    date: "2022-10-13",
  },
  {
    id: "9",
    name: "Lorraine Considine",
    customer_id: "728ed52f3",
    amount: 4069,
    date: "2022-04-15",
  },
  {
    id: "10",
    name: "Jeffrey Boehm",
    customer_id: "728ed52f4",
    amount: 1603,
    date: "2024-11-20",
  },
  {
    id: "11",
    name: "Jeffrey Boehm",
    customer_id: "728ed52f4",
    amount: 383,
    date: "2022-08-28",
  },
  {
    id: "12",
    name: "Jeffrey Boehm",
    customer_id: "728ed52f4",
    amount: 4584,
    date: "2022-05-14",
  },
  {
    id: "13",
    name: "Muriel Jacobs",
    customer_id: "728ed52f5",
    amount: 2541,
    date: "2023-05-08",
  },
  {
    id: "14",
    name: "Muriel Jacobs",
    customer_id: "728ed52f5",
    amount: 155,
    date: "2024-10-08",
  },
  {
    id: "15",
    name: "Muriel Jacobs",
    customer_id: "728ed52f5",
    amount: 305,
    date: "2022-09-13",
  },
  {
    id: "16",
    name: "Marshall Spinka",
    customer_id: "728ed52f6",
    amount: 18,
    date: "2023-03-22",
  },
  {
    id: "17",
    name: "Marshall Spinka",
    customer_id: "728ed52f6",
    amount: 293,
    date: "2022-07-02",
  },
  {
    id: "18",
    name: "Marshall Spinka",
    customer_id: "728ed52f6",
    amount: 2478,
    date: "2024-09-11",
  },
  {
    id: "19",
    name: "Gene Roberts",
    customer_id: "728ed52f7",
    amount: 86,
    date: "2024-10-27",
  },
  {
    id: "20",
    name: "Gene Roberts",
    customer_id: "728ed52f7",
    amount: 52,
    date: "2023-02-13",
  },
  {
    id: "21",
    name: "Gene Roberts",
    customer_id: "728ed52f7",
    amount: 204,
    date: "2022-03-18",
  },
  {
    id: "22",
    name: "Mr. Adrienne Rolfson",
    customer_id: "728ed52f8",
    amount: 3464,
    date: "2023-05-03",
  },
  {
    id: "23",
    name: "Mr. Adrienne Rolfson",
    customer_id: "728ed52f8",
    amount: 4116,
    date: "2023-03-24",
  },
  {
    id: "24",
    name: "Mr. Adrienne Rolfson",
    customer_id: "728ed52f8",
    amount: 237,
    date: "2023-02-02",
  },
  {
    id: "25",
    name: "Melinda Zieme",
    customer_id: "728ed52f9",
    amount: 1446,
    date: "2023-02-23",
  },
  {
    id: "26",
    name: "Melinda Zieme",
    customer_id: "728ed52f9",
    amount: 287,
    date: "2024-05-08",
  },
  {
    id: "27",
    name: "Melinda Zieme",
    customer_id: "728ed52f9",
    amount: 36,
    date: "2023-11-08",
  },
  {
    id: "28",
    name: "Elisa Hartmann",
    customer_id: "728ed52f10",
    amount: 217,
    date: "2022-10-22",
  },
  {
    id: "29",
    name: "Elisa Hartmann",
    customer_id: "728ed52f10",
    amount: 4355,
    date: "2022-10-04",
  },
  {
    id: "30",
    name: "Elisa Hartmann",
    customer_id: "728ed52f10",
    amount: 84,
    date: "2022-11-01",
  },
  {
    id: "31",
    name: "Katherine Effertz",
    customer_id: "728ed52f11",
    amount: 17,
    date: "2024-11-09",
  },
  {
    id: "32",
    name: "Katherine Effertz",
    customer_id: "728ed52f11",
    amount: 341,
    date: "2023-05-02",
  },
  {
    id: "33",
    name: "Katherine Effertz",
    customer_id: "728ed52f11",
    amount: 185,
    date: "2023-05-09",
  },
  {
    id: "34",
    name: "Shirley Feil",
    customer_id: "728ed52f12",
    amount: 427,
    date: "2024-05-09",
  },
  {
    id: "35",
    name: "Shirley Feil",
    customer_id: "728ed52f12",
    amount: 213,
    date: "2023-07-18",
  },
  {
    id: "36",
    name: "Shirley Feil",
    customer_id: "728ed52f12",
    amount: 371,
    date: "2023-02-20",
  },
  {
    id: "37",
    name: "Verna Barrows",
    customer_id: "728ed52f13",
    amount: 173,
    date: "2023-01-17",
  },
  {
    id: "38",
    name: "Verna Barrows",
    customer_id: "728ed52f13",
    amount: 278,
    date: "2024-12-21",
  },
  {
    id: "39",
    name: "Verna Barrows",
    customer_id: "728ed52f13",
    amount: 34,
    date: "2022-12-17",
  },
  {
    id: "40",
    name: "Josh Gorczany",
    customer_id: "728ed52f14",
    amount: 39,
    date: "2022-04-16",
  },
  {
    id: "41",
    name: "Josh Gorczany",
    customer_id: "728ed52f14",
    amount: 87,
    date: "2022-02-06",
  },
  {
    id: "42",
    name: "Josh Gorczany",
    customer_id: "728ed52f14",
    amount: 3295,
    date: "2024-01-09",
  },
  {
    id: "43",
    name: "Dennis Schulist",
    customer_id: "728ed52f15",
    amount: 86,
    date: "2022-03-12",
  },
  {
    id: "44",
    name: "Dennis Schulist",
    customer_id: "728ed52f15",
    amount: 88,
    date: "2023-02-07",
  },
  {
    id: "45",
    name: "Dennis Schulist",
    customer_id: "728ed52f15",
    amount: 2220,
    date: "2022-08-19",
  },
  {
    id: "46",
    name: "Wilbur Schuppe",
    customer_id: "728ed52f16",
    amount: 329,
    date: "2024-08-06",
  },
  {
    id: "47",
    name: "Wilbur Schuppe",
    customer_id: "728ed52f16",
    amount: 112,
    date: "2024-07-04",
  },
  {
    id: "48",
    name: "Wilbur Schuppe",
    customer_id: "728ed52f16",
    amount: 272,
    date: "2024-12-28",
  },
  {
    id: "49",
    name: "Bethany Cronin",
    customer_id: "728ed52f17",
    amount: 1686,
    date: "2024-08-26",
  },
  {
    id: "50",
    name: "Bethany Cronin",
    customer_id: "728ed52f17",
    amount: 3542,
    date: "2022-08-19",
  },
  {
    id: "51",
    name: "Bethany Cronin",
    customer_id: "728ed52f17",
    amount: 79,
    date: "2024-12-26",
  },
  {
    id: "52",
    name: "Meghan Von",
    customer_id: "728ed52f18",
    amount: 397,
    date: "2022-01-03",
  },
  {
    id: "53",
    name: "Meghan Von",
    customer_id: "728ed52f18",
    amount: 442,
    date: "2022-01-01",
  },
  {
    id: "54",
    name: "Meghan Von",
    customer_id: "728ed52f18",
    amount: 2701,
    date: "2024-11-18",
  },
  {
    id: "55",
    name: "Lewis Friesen",
    customer_id: "728ed52f19",
    amount: 4466,
    date: "2022-03-23",
  },
  {
    id: "56",
    name: "Lewis Friesen",
    customer_id: "728ed52f19",
    amount: 255,
    date: "2023-02-09",
  },
  {
    id: "57",
    name: "Lewis Friesen",
    customer_id: "728ed52f19",
    amount: 454,
    date: "2024-12-24",
  },
  {
    id: "58",
    name: "Adrienne Wilkinson",
    customer_id: "728ed52f20",
    amount: 2635,
    date: "2022-01-20",
  },
  {
    id: "59",
    name: "Adrienne Wilkinson",
    customer_id: "728ed52f20",
    amount: 493,
    date: "2024-03-23",
  },
  {
    id: "60",
    name: "Adrienne Wilkinson",
    customer_id: "728ed52f20",
    amount: 412,
    date: "2023-05-17",
  },
  {
    id: "61",
    name: "Keith Homenick",
    customer_id: "728ed52f21",
    amount: 1977,
    date: "2024-01-18",
  },
  {
    id: "62",
    name: "Keith Homenick",
    customer_id: "728ed52f21",
    amount: 51,
    date: "2023-10-16",
  },
  {
    id: "63",
    name: "Keith Homenick",
    customer_id: "728ed52f21",
    amount: 191,
    date: "2024-11-13",
  },
  {
    id: "64",
    name: "Yvette Gerlach",
    customer_id: "728ed52f22",
    amount: 40,
    date: "2023-04-20",
  },
  {
    id: "65",
    name: "Yvette Gerlach",
    customer_id: "728ed52f22",
    amount: 198,
    date: "2024-10-08",
  },
  {
    id: "66",
    name: "Yvette Gerlach",
    customer_id: "728ed52f22",
    amount: 493,
    date: "2024-03-12",
  },
  {
    id: "67",
    name: "Lynn Moore",
    customer_id: "728ed52f23",
    amount: 2926,
    date: "2024-11-14",
  },
  {
    id: "68",
    name: "Lynn Moore",
    customer_id: "728ed52f23",
    amount: 3903,
    date: "2023-03-06",
  },
  {
    id: "69",
    name: "Lynn Moore",
    customer_id: "728ed52f23",
    amount: 8,
    date: "2024-08-19",
  },
  {
    id: "70",
    name: "Gerardo Goodwin",
    customer_id: "728ed52f24",
    amount: 1054,
    date: "2022-01-20",
  },
  {
    id: "71",
    name: "Gerardo Goodwin",
    customer_id: "728ed52f24",
    amount: 3670,
    date: "2023-09-11",
  },
  {
    id: "72",
    name: "Gerardo Goodwin",
    customer_id: "728ed52f24",
    amount: 124,
    date: "2023-09-16",
  },
  {
    id: "73",
    name: "Elbert Howell",
    customer_id: "728ed52f25",
    amount: 23,
    date: "2022-03-06",
  },
  {
    id: "74",
    name: "Elbert Howell",
    customer_id: "728ed52f25",
    amount: 2888,
    date: "2023-08-27",
  },
  {
    id: "75",
    name: "Elbert Howell",
    customer_id: "728ed52f25",
    amount: 247,
    date: "2023-06-14",
  },
  {
    id: "76",
    name: "Bennie Heaney",
    customer_id: "728ed52f26",
    amount: 1166,
    date: "2023-09-07",
  },
  {
    id: "77",
    name: "Bennie Heaney",
    customer_id: "728ed52f26",
    amount: 486,
    date: "2024-11-18",
  },
  {
    id: "78",
    name: "Bennie Heaney",
    customer_id: "728ed52f26",
    amount: 3353,
    date: "2022-03-31",
  },
  {
    id: "79",
    name: "Leonard Schmeler",
    customer_id: "728ed52f27",
    amount: 3120,
    date: "2022-08-24",
  },
  {
    id: "80",
    name: "Leonard Schmeler",
    customer_id: "728ed52f27",
    amount: 4954,
    date: "2024-06-07",
  },
  {
    id: "81",
    name: "Leonard Schmeler",
    customer_id: "728ed52f27",
    amount: 165,
    date: "2022-08-24",
  },
  {
    id: "82",
    name: "Mr. Vicky Wyman",
    customer_id: "728ed52f28",
    amount: 1709,
    date: "2022-06-24",
  },
  {
    id: "83",
    name: "Mr. Vicky Wyman",
    customer_id: "728ed52f28",
    amount: 147,
    date: "2023-05-04",
  },
  {
    id: "84",
    name: "Mr. Vicky Wyman",
    customer_id: "728ed52f28",
    amount: 265,
    date: "2022-01-17",
  },
  {
    id: "85",
    name: "Ida Witting",
    customer_id: "728ed52f29",
    amount: 73,
    date: "2022-10-11",
  },
  {
    id: "86",
    name: "Ida Witting",
    customer_id: "728ed52f29",
    amount: 3459,
    date: "2023-09-12",
  },
  {
    id: "87",
    name: "Ida Witting",
    customer_id: "728ed52f29",
    amount: 50,
    date: "2022-09-08",
  },
  {
    id: "88",
    name: "Marjorie Kuphal",
    customer_id: "728ed52f30",
    amount: 249,
    date: "2023-07-05",
  },
  {
    id: "89",
    name: "Marjorie Kuphal",
    customer_id: "728ed52f30",
    amount: 22,
    date: "2022-06-02",
  },
  {
    id: "90",
    name: "Marjorie Kuphal",
    customer_id: "728ed52f30",
    amount: 67,
    date: "2023-06-19",
  },
  {
    id: "91",
    name: "Leticia Kozey",
    customer_id: "728ed52f31",
    amount: 53,
    date: "2022-06-07",
  },
  {
    id: "92",
    name: "Leticia Kozey",
    customer_id: "728ed52f31",
    amount: 60,
    date: "2023-01-27",
  },
  {
    id: "93",
    name: "Leticia Kozey",
    customer_id: "728ed52f31",
    amount: 20,
    date: "2022-01-15",
  },
  {
    id: "94",
    name: "Stewart Fahey",
    customer_id: "728ed52f32",
    amount: 306,
    date: "2023-04-03",
  },
  {
    id: "95",
    name: "Stewart Fahey",
    customer_id: "728ed52f32",
    amount: 11,
    date: "2022-07-19",
  },
  {
    id: "96",
    name: "Stewart Fahey",
    customer_id: "728ed52f32",
    amount: 363,
    date: "2024-03-27",
  },
  {
    id: "97",
    name: "Ms. Jesse Swift",
    customer_id: "728ed52f33",
    amount: 37,
    date: "2022-11-03",
  },
  {
    id: "98",
    name: "Ms. Jesse Swift",
    customer_id: "728ed52f33",
    amount: 4624,
    date: "2023-06-09",
  },
  {
    id: "99",
    name: "Ms. Jesse Swift",
    customer_id: "728ed52f33",
    amount: 49,
    date: "2023-11-13",
  },
  {
    id: "100",
    name: "Danny Schmidt",
    customer_id: "728ed52f34",
    amount: 87,
    date: "2024-07-23",
  },
  {
    id: "101",
    name: "Danny Schmidt",
    customer_id: "728ed52f34",
    amount: 1060,
    date: "2022-09-04",
  },
  {
    id: "102",
    name: "Danny Schmidt",
    customer_id: "728ed52f34",
    amount: 81,
    date: "2023-05-26",
  },
  {
    id: "103",
    name: "Raymond Cummings",
    customer_id: "728ed52f35",
    amount: 1829,
    date: "2024-03-13",
  },
  {
    id: "104",
    name: "Raymond Cummings",
    customer_id: "728ed52f35",
    amount: 172,
    date: "2024-11-08",
  },
  {
    id: "105",
    name: "Raymond Cummings",
    customer_id: "728ed52f35",
    amount: 312,
    date: "2023-11-22",
  },
  {
    id: "106",
    name: "Dr. Kerry Kunze",
    customer_id: "728ed52f36",
    amount: 2859,
    date: "2023-10-01",
  },
  {
    id: "107",
    name: "Dr. Kerry Kunze",
    customer_id: "728ed52f36",
    amount: 55,
    date: "2023-03-07",
  },
  {
    id: "108",
    name: "Dr. Kerry Kunze",
    customer_id: "728ed52f36",
    amount: 1140,
    date: "2024-10-02",
  },
  {
    id: "109",
    name: "Charlene Zulauf",
    customer_id: "728ed52f37",
    amount: 4644,
    date: "2023-12-18",
  },
  {
    id: "110",
    name: "Charlene Zulauf",
    customer_id: "728ed52f37",
    amount: 1029,
    date: "2023-12-19",
  },
  {
    id: "111",
    name: "Charlene Zulauf",
    customer_id: "728ed52f37",
    amount: 165,
    date: "2023-07-03",
  },
  {
    id: "112",
    name: "Daisy Koepp",
    customer_id: "728ed52f38",
    amount: 4245,
    date: "2022-03-26",
  },
  {
    id: "113",
    name: "Daisy Koepp",
    customer_id: "728ed52f38",
    amount: 60,
    date: "2023-08-16",
  },
  {
    id: "114",
    name: "Daisy Koepp",
    customer_id: "728ed52f38",
    amount: 245,
    date: "2023-08-26",
  },
  {
    id: "115",
    name: "Dr. Sammy Rempel",
    customer_id: "728ed52f39",
    amount: 40,
    date: "2024-05-09",
  },
  {
    id: "116",
    name: "Dr. Sammy Rempel",
    customer_id: "728ed52f39",
    amount: 4421,
    date: "2023-03-08",
  },
  {
    id: "117",
    name: "Dr. Sammy Rempel",
    customer_id: "728ed52f39",
    amount: 2444,
    date: "2023-02-05",
  },
  {
    id: "118",
    name: "Peter Boyle V",
    customer_id: "728ed52f40",
    amount: 121,
    date: "2024-04-25",
  },
  {
    id: "119",
    name: "Peter Boyle V",
    customer_id: "728ed52f40",
    amount: 5,
    date: "2023-12-10",
  },
  {
    id: "120",
    name: "Peter Boyle V",
    customer_id: "728ed52f40",
    amount: 288,
    date: "2024-03-14",
  },
  {
    id: "121",
    name: "Alejandro O'Conner",
    customer_id: "728ed52f41",
    amount: 287,
    date: "2023-06-18",
  },
  {
    id: "122",
    name: "Alejandro O'Conner",
    customer_id: "728ed52f41",
    amount: 3066,
    date: "2022-12-23",
  },
  {
    id: "123",
    name: "Alejandro O'Conner",
    customer_id: "728ed52f41",
    amount: 379,
    date: "2024-04-09",
  },
  {
    id: "124",
    name: "Dr. Dana Vandervort",
    customer_id: "728ed52f42",
    amount: 85,
    date: "2023-04-19",
  },
  {
    id: "125",
    name: "Dr. Dana Vandervort",
    customer_id: "728ed52f42",
    amount: 170,
    date: "2023-09-18",
  },
  {
    id: "126",
    name: "Dr. Dana Vandervort",
    customer_id: "728ed52f42",
    amount: 8,
    date: "2023-09-22",
  },
  {
    id: "127",
    name: "Everett Willms",
    customer_id: "728ed52f43",
    amount: 341,
    date: "2023-08-07",
  },
  {
    id: "128",
    name: "Everett Willms",
    customer_id: "728ed52f43",
    amount: 40,
    date: "2022-01-24",
  },
  {
    id: "129",
    name: "Everett Willms",
    customer_id: "728ed52f43",
    amount: 4965,
    date: "2024-01-06",
  },
  {
    id: "130",
    name: "Marc Braun",
    customer_id: "728ed52f44",
    amount: 446,
    date: "2024-08-09",
  },
  {
    id: "131",
    name: "Marc Braun",
    customer_id: "728ed52f44",
    amount: 88,
    date: "2023-09-18",
  },
  {
    id: "132",
    name: "Marc Braun",
    customer_id: "728ed52f44",
    amount: 2534,
    date: "2024-08-18",
  },
  {
    id: "133",
    name: "Miss May Goodwin",
    customer_id: "728ed52f45",
    amount: 4318,
    date: "2023-09-05",
  },
  {
    id: "134",
    name: "Miss May Goodwin",
    customer_id: "728ed52f45",
    amount: 62,
    date: "2023-11-02",
  },
  {
    id: "135",
    name: "Miss May Goodwin",
    customer_id: "728ed52f45",
    amount: 3906,
    date: "2024-11-14",
  },
  {
    id: "136",
    name: "Estelle Dietrich",
    customer_id: "728ed52f46",
    amount: 474,
    date: "2023-08-11",
  },
  {
    id: "137",
    name: "Estelle Dietrich",
    customer_id: "728ed52f46",
    amount: 4767,
    date: "2024-03-22",
  },
  {
    id: "138",
    name: "Estelle Dietrich",
    customer_id: "728ed52f46",
    amount: 1674,
    date: "2022-02-26",
  },
  {
    id: "139",
    name: "Arlene Huel",
    customer_id: "728ed52f47",
    amount: 2317,
    date: "2023-10-31",
  },
  {
    id: "140",
    name: "Arlene Huel",
    customer_id: "728ed52f47",
    amount: 4627,
    date: "2023-10-02",
  },
  {
    id: "141",
    name: "Arlene Huel",
    customer_id: "728ed52f47",
    amount: 66,
    date: "2022-01-25",
  },
  {
    id: "142",
    name: "Kenny Kessler",
    customer_id: "728ed52f48",
    amount: 188,
    date: "2022-11-28",
  },
  {
    id: "143",
    name: "Kenny Kessler",
    customer_id: "728ed52f48",
    amount: 83,
    date: "2022-03-12",
  },
  {
    id: "144",
    name: "Kenny Kessler",
    customer_id: "728ed52f48",
    amount: 1469,
    date: "2024-07-01",
  },
  {
    id: "145",
    name: "Naomi Murray",
    customer_id: "728ed52f49",
    amount: 128,
    date: "2023-06-10",
  },
  {
    id: "146",
    name: "Naomi Murray",
    customer_id: "728ed52f49",
    amount: 3853,
    date: "2024-08-15",
  },
  {
    id: "147",
    name: "Naomi Murray",
    customer_id: "728ed52f49",
    amount: 31,
    date: "2022-06-01",
  },
  {
    id: "148",
    name: "Bill McKenzie",
    customer_id: "728ed52f50",
    amount: 92,
    date: "2023-12-22",
  },
  {
    id: "149",
    name: "Bill McKenzie",
    customer_id: "728ed52f50",
    amount: 83,
    date: "2024-11-19",
  },
  {
    id: "150",
    name: "Bill McKenzie",
    customer_id: "728ed52f50",
    amount: 308,
    date: "2022-04-24",
  },
  {
    id: "151",
    name: "Traci Ondricka",
    customer_id: "728ed52f51",
    amount: 3457,
    date: "2023-10-24",
  },
  {
    id: "152",
    name: "Traci Ondricka",
    customer_id: "728ed52f51",
    amount: 4155,
    date: "2024-09-19",
  },
  {
    id: "153",
    name: "Traci Ondricka",
    customer_id: "728ed52f51",
    amount: 2033,
    date: "2024-03-03",
  },
  {
    id: "154",
    name: "Mr. Gilbert Schaden",
    customer_id: "728ed52f52",
    amount: 38,
    date: "2024-08-24",
  },
  {
    id: "155",
    name: "Mr. Gilbert Schaden",
    customer_id: "728ed52f52",
    amount: 18,
    date: "2023-11-27",
  },
  {
    id: "156",
    name: "Mr. Gilbert Schaden",
    customer_id: "728ed52f52",
    amount: 452,
    date: "2023-05-04",
  },
  {
    id: "157",
    name: "Eunice Ullrich",
    customer_id: "728ed52f53",
    amount: 2679,
    date: "2024-02-29",
  },
  {
    id: "158",
    name: "Eunice Ullrich",
    customer_id: "728ed52f53",
    amount: 3702,
    date: "2022-06-16",
  },
  {
    id: "159",
    name: "Eunice Ullrich",
    customer_id: "728ed52f53",
    amount: 206,
    date: "2022-05-18",
  },
  {
    id: "160",
    name: "Ms. Jessie Romaguera",
    customer_id: "728ed52f54",
    amount: 4094,
    date: "2023-12-05",
  },
  {
    id: "161",
    name: "Ms. Jessie Romaguera",
    customer_id: "728ed52f54",
    amount: 4916,
    date: "2022-12-24",
  },
  {
    id: "162",
    name: "Ms. Jessie Romaguera",
    customer_id: "728ed52f54",
    amount: 2363,
    date: "2022-11-20",
  },
  {
    id: "163",
    name: "Allison Strosin",
    customer_id: "728ed52f55",
    amount: 150,
    date: "2022-03-04",
  },
  {
    id: "164",
    name: "Allison Strosin",
    customer_id: "728ed52f55",
    amount: 29,
    date: "2023-09-14",
  },
  {
    id: "165",
    name: "Allison Strosin",
    customer_id: "728ed52f55",
    amount: 28,
    date: "2022-09-11",
  },
  {
    id: "166",
    name: "Merle Haag",
    customer_id: "728ed52f56",
    amount: 210,
    date: "2024-09-06",
  },
  {
    id: "167",
    name: "Merle Haag",
    customer_id: "728ed52f56",
    amount: 66,
    date: "2024-04-07",
  },
  {
    id: "168",
    name: "Merle Haag",
    customer_id: "728ed52f56",
    amount: 3000,
    date: "2023-06-08",
  },
  {
    id: "169",
    name: "Joe Trantow",
    customer_id: "728ed52f57",
    amount: 185,
    date: "2024-08-22",
  },
  {
    id: "170",
    name: "Joe Trantow",
    customer_id: "728ed52f57",
    amount: 83,
    date: "2023-02-10",
  },
  {
    id: "171",
    name: "Joe Trantow",
    customer_id: "728ed52f57",
    amount: 72,
    date: "2024-02-07",
  },
  {
    id: "172",
    name: "Conrad Gorczany",
    customer_id: "728ed52f58",
    amount: 73,
    date: "2022-12-24",
  },
  {
    id: "173",
    name: "Conrad Gorczany",
    customer_id: "728ed52f58",
    amount: 3711,
    date: "2023-08-05",
  },
  {
    id: "174",
    name: "Conrad Gorczany",
    customer_id: "728ed52f58",
    amount: 63,
    date: "2022-02-26",
  },
  {
    id: "175",
    name: "Mona Donnelly",
    customer_id: "728ed52f59",
    amount: 168,
    date: "2023-01-04",
  },
  {
    id: "176",
    name: "Mona Donnelly",
    customer_id: "728ed52f59",
    amount: 3340,
    date: "2024-06-02",
  },
  {
    id: "177",
    name: "Mona Donnelly",
    customer_id: "728ed52f59",
    amount: 4490,
    date: "2023-09-22",
  },
  {
    id: "178",
    name: "Eddie Davis",
    customer_id: "728ed52f60",
    amount: 385,
    date: "2024-04-21",
  },
  {
    id: "179",
    name: "Eddie Davis",
    customer_id: "728ed52f60",
    amount: 3641,
    date: "2023-01-11",
  },
  {
    id: "180",
    name: "Eddie Davis",
    customer_id: "728ed52f60",
    amount: 79,
    date: "2023-08-19",
  },
  {
    id: "181",
    name: "Marshall Hettinger",
    customer_id: "728ed52f61",
    amount: 114,
    date: "2023-03-30",
  },
  {
    id: "182",
    name: "Marshall Hettinger",
    customer_id: "728ed52f61",
    amount: 184,
    date: "2023-09-23",
  },
  {
    id: "183",
    name: "Marshall Hettinger",
    customer_id: "728ed52f61",
    amount: 378,
    date: "2023-02-08",
  },
  {
    id: "184",
    name: "Lora Hintz",
    customer_id: "728ed52f62",
    amount: 1753,
    date: "2022-09-08",
  },
  {
    id: "185",
    name: "Lora Hintz",
    customer_id: "728ed52f62",
    amount: 27,
    date: "2022-02-17",
  },
  {
    id: "186",
    name: "Lora Hintz",
    customer_id: "728ed52f62",
    amount: 48,
    date: "2024-10-13",
  },
  {
    id: "187",
    name: "Tina Grimes",
    customer_id: "728ed52f63",
    amount: 145,
    date: "2023-05-23",
  },
  {
    id: "188",
    name: "Tina Grimes",
    customer_id: "728ed52f63",
    amount: 84,
    date: "2022-11-12",
  },
  {
    id: "189",
    name: "Tina Grimes",
    customer_id: "728ed52f63",
    amount: 308,
    date: "2024-08-12",
  },
  {
    id: "190",
    name: "Maria Hagenes",
    customer_id: "728ed52f64",
    amount: 41,
    date: "2023-05-08",
  },
  {
    id: "191",
    name: "Maria Hagenes",
    customer_id: "728ed52f64",
    amount: 50,
    date: "2023-07-21",
  },
  {
    id: "192",
    name: "Maria Hagenes",
    customer_id: "728ed52f64",
    amount: 494,
    date: "2024-08-31",
  },
  {
    id: "193",
    name: "Mack White",
    customer_id: "728ed52f65",
    amount: 3139,
    date: "2022-07-25",
  },
  {
    id: "194",
    name: "Mack White",
    customer_id: "728ed52f65",
    amount: 30,
    date: "2022-09-05",
  },
  {
    id: "195",
    name: "Mack White",
    customer_id: "728ed52f65",
    amount: 1387,
    date: "2024-11-01",
  },
  {
    id: "196",
    name: "Susan Beahan",
    customer_id: "728ed52f66",
    amount: 38,
    date: "2022-07-06",
  },
  {
    id: "197",
    name: "Susan Beahan",
    customer_id: "728ed52f66",
    amount: 3144,
    date: "2024-06-28",
  },
  {
    id: "198",
    name: "Susan Beahan",
    customer_id: "728ed52f66",
    amount: 176,
    date: "2023-05-28",
  },
  {
    id: "199",
    name: "Yvonne Larkin",
    customer_id: "728ed52f67",
    amount: 2588,
    date: "2024-10-13",
  },
  {
    id: "200",
    name: "Yvonne Larkin",
    customer_id: "728ed52f67",
    amount: 1777,
    date: "2023-04-19",
  },
  {
    id: "201",
    name: "Yvonne Larkin",
    customer_id: "728ed52f67",
    amount: 45,
    date: "2023-06-05",
  },
  {
    id: "202",
    name: "Patricia Batz",
    customer_id: "728ed52f68",
    amount: 148,
    date: "2023-03-15",
  },
  {
    id: "203",
    name: "Patricia Batz",
    customer_id: "728ed52f68",
    amount: 73,
    date: "2024-02-18",
  },
  {
    id: "204",
    name: "Patricia Batz",
    customer_id: "728ed52f68",
    amount: 49,
    date: "2023-05-31",
  },
  {
    id: "205",
    name: "Cecilia Schinner DDS",
    customer_id: "728ed52f69",
    amount: 57,
    date: "2023-06-30",
  },
  {
    id: "206",
    name: "Cecilia Schinner DDS",
    customer_id: "728ed52f69",
    amount: 1600,
    date: "2023-04-11",
  },
  {
    id: "207",
    name: "Cecilia Schinner DDS",
    customer_id: "728ed52f69",
    amount: 3314,
    date: "2022-05-18",
  },
  {
    id: "208",
    name: "Jody McKenzie",
    customer_id: "728ed52f70",
    amount: 60,
    date: "2022-05-15",
  },
  {
    id: "209",
    name: "Jody McKenzie",
    customer_id: "728ed52f70",
    amount: 128,
    date: "2022-12-24",
  },
  {
    id: "210",
    name: "Jody McKenzie",
    customer_id: "728ed52f70",
    amount: 364,
    date: "2022-11-18",
  },
  {
    id: "211",
    name: "Sherri Rosenbaum",
    customer_id: "728ed52f71",
    amount: 13,
    date: "2022-02-18",
  },
  {
    id: "212",
    name: "Sherri Rosenbaum",
    customer_id: "728ed52f71",
    amount: 338,
    date: "2024-07-05",
  },
  {
    id: "213",
    name: "Sherri Rosenbaum",
    customer_id: "728ed52f71",
    amount: 27,
    date: "2022-04-18",
  },
  {
    id: "214",
    name: "Ronald Lowe",
    customer_id: "728ed52f72",
    amount: 1077,
    date: "2024-02-22",
  },
  {
    id: "215",
    name: "Ronald Lowe",
    customer_id: "728ed52f72",
    amount: 264,
    date: "2023-09-18",
  },
  {
    id: "216",
    name: "Ronald Lowe",
    customer_id: "728ed52f72",
    amount: 58,
    date: "2022-05-12",
  },
  {
    id: "217",
    name: "Frances Schulist",
    customer_id: "728ed52f73",
    amount: 1786,
    date: "2024-08-19",
  },
  {
    id: "218",
    name: "Frances Schulist",
    customer_id: "728ed52f73",
    amount: 239,
    date: "2023-01-05",
  },
  {
    id: "219",
    name: "Frances Schulist",
    customer_id: "728ed52f73",
    amount: 487,
    date: "2022-10-09",
  },
  {
    id: "220",
    name: "Hubert Beahan",
    customer_id: "728ed52f74",
    amount: 4289,
    date: "2024-06-04",
  },
  {
    id: "221",
    name: "Hubert Beahan",
    customer_id: "728ed52f74",
    amount: 83,
    date: "2023-04-04",
  },
  {
    id: "222",
    name: "Hubert Beahan",
    customer_id: "728ed52f74",
    amount: 2303,
    date: "2022-04-23",
  },
  {
    id: "223",
    name: "Joseph Fay",
    customer_id: "728ed52f75",
    amount: 3778,
    date: "2022-01-17",
  },
  {
    id: "224",
    name: "Joseph Fay",
    customer_id: "728ed52f75",
    amount: 75,
    date: "2023-01-31",
  },
  {
    id: "225",
    name: "Joseph Fay",
    customer_id: "728ed52f75",
    amount: 456,
    date: "2022-04-15",
  },
  {
    id: "226",
    name: "Christy Simonis",
    customer_id: "728ed52f76",
    amount: 2011,
    date: "2024-10-28",
  },
  {
    id: "227",
    name: "Christy Simonis",
    customer_id: "728ed52f76",
    amount: 221,
    date: "2022-01-24",
  },
  {
    id: "228",
    name: "Christy Simonis",
    customer_id: "728ed52f76",
    amount: 486,
    date: "2024-12-07",
  },
  {
    id: "229",
    name: "Jessie Gorczany",
    customer_id: "728ed52f77",
    amount: 18,
    date: "2023-01-08",
  },
  {
    id: "230",
    name: "Jessie Gorczany",
    customer_id: "728ed52f77",
    amount: 301,
    date: "2023-08-13",
  },
  {
    id: "231",
    name: "Jessie Gorczany",
    customer_id: "728ed52f77",
    amount: 3481,
    date: "2023-05-12",
  },
  {
    id: "232",
    name: "Herman Watsica",
    customer_id: "728ed52f78",
    amount: 290,
    date: "2023-08-23",
  },
  {
    id: "233",
    name: "Herman Watsica",
    customer_id: "728ed52f78",
    amount: 359,
    date: "2023-04-06",
  },
  {
    id: "234",
    name: "Herman Watsica",
    customer_id: "728ed52f78",
    amount: 1,
    date: "2023-11-30",
  },
  {
    id: "235",
    name: "Ms. Roberto Marks",
    customer_id: "728ed52f79",
    amount: 54,
    date: "2023-03-28",
  },
  {
    id: "236",
    name: "Ms. Roberto Marks",
    customer_id: "728ed52f79",
    amount: 51,
    date: "2023-11-17",
  },
  {
    id: "237",
    name: "Ms. Roberto Marks",
    customer_id: "728ed52f79",
    amount: 2253,
    date: "2023-12-30",
  },
  {
    id: "238",
    name: "Jerald Luettgen",
    customer_id: "728ed52f80",
    amount: 3470,
    date: "2023-11-28",
  },
  {
    id: "239",
    name: "Jerald Luettgen",
    customer_id: "728ed52f80",
    amount: 2667,
    date: "2023-02-15",
  },
  {
    id: "240",
    name: "Jerald Luettgen",
    customer_id: "728ed52f80",
    amount: 2804,
    date: "2024-05-13",
  },
  {
    id: "241",
    name: "Teri Goodwin",
    customer_id: "728ed52f81",
    amount: 2897,
    date: "2024-07-13",
  },
  {
    id: "242",
    name: "Teri Goodwin",
    customer_id: "728ed52f81",
    amount: 1493,
    date: "2023-01-31",
  },
  {
    id: "243",
    name: "Teri Goodwin",
    customer_id: "728ed52f81",
    amount: 2811,
    date: "2024-01-25",
  },
  {
    id: "244",
    name: "Claudia Kunze IV",
    customer_id: "728ed52f82",
    amount: 4195,
    date: "2023-12-17",
  },
  {
    id: "245",
    name: "Claudia Kunze IV",
    customer_id: "728ed52f82",
    amount: 87,
    date: "2023-01-11",
  },
  {
    id: "246",
    name: "Claudia Kunze IV",
    customer_id: "728ed52f82",
    amount: 58,
    date: "2022-02-11",
  },
  {
    id: "247",
    name: "Brandon Shields",
    customer_id: "728ed52f83",
    amount: 40,
    date: "2023-09-19",
  },
  {
    id: "248",
    name: "Brandon Shields",
    customer_id: "728ed52f83",
    amount: 95,
    date: "2022-11-25",
  },
  {
    id: "249",
    name: "Brandon Shields",
    customer_id: "728ed52f83",
    amount: 437,
    date: "2023-03-06",
  },
  {
    id: "250",
    name: "Wendell Fisher",
    customer_id: "728ed52f84",
    amount: 450,
    date: "2022-03-20",
  },
  {
    id: "251",
    name: "Wendell Fisher",
    customer_id: "728ed52f84",
    amount: 3081,
    date: "2024-03-26",
  },
  {
    id: "252",
    name: "Wendell Fisher",
    customer_id: "728ed52f84",
    amount: 2372,
    date: "2023-07-06",
  },
  {
    id: "253",
    name: "Jeannie Hagenes",
    customer_id: "728ed52f85",
    amount: 28,
    date: "2024-07-01",
  },
  {
    id: "254",
    name: "Jeannie Hagenes",
    customer_id: "728ed52f85",
    amount: 412,
    date: "2023-02-11",
  },
  {
    id: "255",
    name: "Jeannie Hagenes",
    customer_id: "728ed52f85",
    amount: 152,
    date: "2022-06-01",
  },
  {
    id: "256",
    name: "Edmund Crist",
    customer_id: "728ed52f86",
    amount: 266,
    date: "2023-01-17",
  },
  {
    id: "257",
    name: "Edmund Crist",
    customer_id: "728ed52f86",
    amount: 3,
    date: "2022-09-09",
  },
  {
    id: "258",
    name: "Edmund Crist",
    customer_id: "728ed52f86",
    amount: 3150,
    date: "2022-12-30",
  },
  {
    id: "259",
    name: "Isaac Streich",
    customer_id: "728ed52f87",
    amount: 67,
    date: "2023-02-28",
  },
  {
    id: "260",
    name: "Isaac Streich",
    customer_id: "728ed52f87",
    amount: 4555,
    date: "2023-06-17",
  },
  {
    id: "261",
    name: "Isaac Streich",
    customer_id: "728ed52f87",
    amount: 297,
    date: "2023-08-19",
  },
  {
    id: "262",
    name: "Katrina Miller",
    customer_id: "728ed52f88",
    amount: 26,
    date: "2022-01-27",
  },
  {
    id: "263",
    name: "Katrina Miller",
    customer_id: "728ed52f88",
    amount: 166,
    date: "2024-06-01",
  },
  {
    id: "264",
    name: "Katrina Miller",
    customer_id: "728ed52f88",
    amount: 2796,
    date: "2023-08-07",
  },
  {
    id: "265",
    name: "Camille Wiegand",
    customer_id: "728ed52f89",
    amount: 15,
    date: "2023-05-10",
  },
  {
    id: "266",
    name: "Camille Wiegand",
    customer_id: "728ed52f89",
    amount: 258,
    date: "2023-07-10",
  },
  {
    id: "267",
    name: "Camille Wiegand",
    customer_id: "728ed52f89",
    amount: 1420,
    date: "2022-12-23",
  },
  {
    id: "268",
    name: "Joanna Stamm",
    customer_id: "728ed52f90",
    amount: 7,
    date: "2022-02-18",
  },
  {
    id: "269",
    name: "Joanna Stamm",
    customer_id: "728ed52f90",
    amount: 44,
    date: "2024-09-20",
  },
  {
    id: "270",
    name: "Joanna Stamm",
    customer_id: "728ed52f90",
    amount: 4408,
    date: "2024-02-06",
  },
  {
    id: "271",
    name: "Mr. Francis Ward",
    customer_id: "728ed52f91",
    amount: 328,
    date: "2024-01-08",
  },
  {
    id: "272",
    name: "Mr. Francis Ward",
    customer_id: "728ed52f91",
    amount: 77,
    date: "2022-09-03",
  },
  {
    id: "273",
    name: "Mr. Francis Ward",
    customer_id: "728ed52f91",
    amount: 176,
    date: "2022-03-08",
  },
  {
    id: "274",
    name: "Susan Olson",
    customer_id: "728ed52f92",
    amount: 3848,
    date: "2022-05-19",
  },
  {
    id: "275",
    name: "Susan Olson",
    customer_id: "728ed52f92",
    amount: 404,
    date: "2022-11-30",
  },
  {
    id: "276",
    name: "Susan Olson",
    customer_id: "728ed52f92",
    amount: 72,
    date: "2023-05-11",
  },
  {
    id: "277",
    name: "Eric Jaskolski",
    customer_id: "728ed52f93",
    amount: 70,
    date: "2024-03-05",
  },
  {
    id: "278",
    name: "Eric Jaskolski",
    customer_id: "728ed52f93",
    amount: 189,
    date: "2024-03-06",
  },
  {
    id: "279",
    name: "Eric Jaskolski",
    customer_id: "728ed52f93",
    amount: 4002,
    date: "2023-01-22",
  },
  {
    id: "280",
    name: "Kelly Hirthe",
    customer_id: "728ed52f94",
    amount: 156,
    date: "2023-08-08",
  },
  {
    id: "281",
    name: "Kelly Hirthe",
    customer_id: "728ed52f94",
    amount: 481,
    date: "2024-07-02",
  },
  {
    id: "282",
    name: "Kelly Hirthe",
    customer_id: "728ed52f94",
    amount: 18,
    date: "2023-02-26",
  },
  {
    id: "283",
    name: "Mrs. Terrence Gorczany V",
    customer_id: "728ed52f95",
    amount: 96,
    date: "2024-06-07",
  },
  {
    id: "284",
    name: "Mrs. Terrence Gorczany V",
    customer_id: "728ed52f95",
    amount: 65,
    date: "2022-02-28",
  },
  {
    id: "285",
    name: "Mrs. Terrence Gorczany V",
    customer_id: "728ed52f95",
    amount: 2927,
    date: "2023-09-03",
  },
  {
    id: "286",
    name: "Stacey Cummerata",
    customer_id: "728ed52f96",
    amount: 21,
    date: "2024-04-26",
  },
  {
    id: "287",
    name: "Stacey Cummerata",
    customer_id: "728ed52f96",
    amount: 457,
    date: "2022-06-03",
  },
  {
    id: "288",
    name: "Stacey Cummerata",
    customer_id: "728ed52f96",
    amount: 433,
    date: "2023-07-12",
  },
  {
    id: "289",
    name: "Pete Davis",
    customer_id: "728ed52f97",
    amount: 161,
    date: "2024-06-29",
  },
  {
    id: "290",
    name: "Pete Davis",
    customer_id: "728ed52f97",
    amount: 19,
    date: "2022-11-30",
  },
  {
    id: "291",
    name: "Pete Davis",
    customer_id: "728ed52f97",
    amount: 4976,
    date: "2022-06-03",
  },
  {
    id: "292",
    name: "Evan Gusikowski",
    customer_id: "728ed52f98",
    amount: 1947,
    date: "2023-09-18",
  },
  {
    id: "293",
    name: "Evan Gusikowski",
    customer_id: "728ed52f98",
    amount: 24,
    date: "2023-08-17",
  },
  {
    id: "294",
    name: "Evan Gusikowski",
    customer_id: "728ed52f98",
    amount: 41,
    date: "2024-02-04",
  },
  {
    id: "295",
    name: "Mrs. Lindsay Bernier",
    customer_id: "728ed52f99",
    amount: 370,
    date: "2024-06-16",
  },
  {
    id: "296",
    name: "Mrs. Lindsay Bernier",
    customer_id: "728ed52f99",
    amount: 248,
    date: "2022-10-09",
  },
  {
    id: "297",
    name: "Mrs. Lindsay Bernier",
    customer_id: "728ed52f99",
    amount: 72,
    date: "2024-05-29",
  },
  {
    id: "298",
    name: "Delbert Hagenes IV",
    customer_id: "728ed52f100",
    amount: 2215,
    date: "2024-10-11",
  },
  {
    id: "299",
    name: "Delbert Hagenes IV",
    customer_id: "728ed52f100",
    amount: 4643,
    date: "2023-09-16",
  },
  {
    id: "300",
    name: "Delbert Hagenes IV",
    customer_id: "728ed52f100",
    amount: 156,
    date: "2023-11-28",
  },
  {
    id: "301",
    name: "Mrs. Marion Runolfsdottir",
    customer_id: "728ed52f101",
    amount: 2246,
    date: "2022-10-26",
  },
  {
    id: "302",
    name: "Mrs. Marion Runolfsdottir",
    customer_id: "728ed52f101",
    amount: 3123,
    date: "2022-05-31",
  },
  {
    id: "303",
    name: "Mrs. Marion Runolfsdottir",
    customer_id: "728ed52f101",
    amount: 442,
    date: "2022-05-07",
  },
  {
    id: "304",
    name: "Miss Cheryl Halvorson",
    customer_id: "728ed52f102",
    amount: 289,
    date: "2022-04-20",
  },
  {
    id: "305",
    name: "Miss Cheryl Halvorson",
    customer_id: "728ed52f102",
    amount: 9,
    date: "2023-05-11",
  },
  {
    id: "306",
    name: "Miss Cheryl Halvorson",
    customer_id: "728ed52f102",
    amount: 457,
    date: "2023-07-25",
  },
  {
    id: "307",
    name: "Rosa Kilback",
    customer_id: "728ed52f103",
    amount: 2451,
    date: "2022-05-13",
  },
  {
    id: "308",
    name: "Rosa Kilback",
    customer_id: "728ed52f103",
    amount: 400,
    date: "2022-05-26",
  },
  {
    id: "309",
    name: "Rosa Kilback",
    customer_id: "728ed52f103",
    amount: 4,
    date: "2023-12-25",
  },
  {
    id: "310",
    name: "Lana Johns",
    customer_id: "728ed52f104",
    amount: 89,
    date: "2024-06-06",
  },
  {
    id: "311",
    name: "Lana Johns",
    customer_id: "728ed52f104",
    amount: 4418,
    date: "2022-01-24",
  },
  {
    id: "312",
    name: "Lana Johns",
    customer_id: "728ed52f104",
    amount: 4219,
    date: "2022-09-30",
  },
  {
    id: "313",
    name: "Ramona Mante",
    customer_id: "728ed52f105",
    amount: 3617,
    date: "2024-01-09",
  },
  {
    id: "314",
    name: "Ramona Mante",
    customer_id: "728ed52f105",
    amount: 42,
    date: "2023-06-15",
  },
  {
    id: "315",
    name: "Ramona Mante",
    customer_id: "728ed52f105",
    amount: 7,
    date: "2022-10-05",
  },
  {
    id: "316",
    name: "Bryant Jacobson",
    customer_id: "728ed52f106",
    amount: 286,
    date: "2024-03-03",
  },
  {
    id: "317",
    name: "Bryant Jacobson",
    customer_id: "728ed52f106",
    amount: 3478,
    date: "2023-07-08",
  },
  {
    id: "318",
    name: "Bryant Jacobson",
    customer_id: "728ed52f106",
    amount: 1215,
    date: "2023-08-31",
  },
  {
    id: "319",
    name: "Bertha Kovacek III",
    customer_id: "728ed52f107",
    amount: 1580,
    date: "2024-11-04",
  },
  {
    id: "320",
    name: "Bertha Kovacek III",
    customer_id: "728ed52f107",
    amount: 52,
    date: "2024-04-02",
  },
  {
    id: "321",
    name: "Bertha Kovacek III",
    customer_id: "728ed52f107",
    amount: 2122,
    date: "2024-03-12",
  },
  {
    id: "322",
    name: "Silvia Schaden",
    customer_id: "728ed52f108",
    amount: 4187,
    date: "2023-09-06",
  },
  {
    id: "323",
    name: "Silvia Schaden",
    customer_id: "728ed52f108",
    amount: 50,
    date: "2023-06-15",
  },
  {
    id: "324",
    name: "Silvia Schaden",
    customer_id: "728ed52f108",
    amount: 84,
    date: "2022-07-01",
  },
  {
    id: "325",
    name: "Howard Bergstrom",
    customer_id: "728ed52f109",
    amount: 431,
    date: "2023-11-04",
  },
  {
    id: "326",
    name: "Howard Bergstrom",
    customer_id: "728ed52f109",
    amount: 333,
    date: "2023-01-21",
  },
  {
    id: "327",
    name: "Howard Bergstrom",
    customer_id: "728ed52f109",
    amount: 69,
    date: "2024-06-27",
  },
  {
    id: "328",
    name: "Debra Dooley",
    customer_id: "728ed52f110",
    amount: 6,
    date: "2022-04-25",
  },
  {
    id: "329",
    name: "Debra Dooley",
    customer_id: "728ed52f110",
    amount: 364,
    date: "2022-07-29",
  },
  {
    id: "330",
    name: "Debra Dooley",
    customer_id: "728ed52f110",
    amount: 3451,
    date: "2024-03-21",
  },
  {
    id: "331",
    name: "Nettie Beahan",
    customer_id: "728ed52f111",
    amount: 1373,
    date: "2023-07-02",
  },
  {
    id: "332",
    name: "Nettie Beahan",
    customer_id: "728ed52f111",
    amount: 4874,
    date: "2023-12-21",
  },
  {
    id: "333",
    name: "Nettie Beahan",
    customer_id: "728ed52f111",
    amount: 4787,
    date: "2023-02-13",
  },
  {
    id: "334",
    name: "Dwight Bruen",
    customer_id: "728ed52f112",
    amount: 360,
    date: "2022-01-31",
  },
  {
    id: "335",
    name: "Dwight Bruen",
    customer_id: "728ed52f112",
    amount: 164,
    date: "2022-12-24",
  },
  {
    id: "336",
    name: "Dwight Bruen",
    customer_id: "728ed52f112",
    amount: 432,
    date: "2023-04-08",
  },
  {
    id: "337",
    name: "Laurie Schamberger",
    customer_id: "728ed52f113",
    amount: 59,
    date: "2023-04-30",
  },
  {
    id: "338",
    name: "Laurie Schamberger",
    customer_id: "728ed52f113",
    amount: 82,
    date: "2022-03-04",
  },
  {
    id: "339",
    name: "Laurie Schamberger",
    customer_id: "728ed52f113",
    amount: 4297,
    date: "2023-05-13",
  },
  {
    id: "340",
    name: "Cecelia Lemke",
    customer_id: "728ed52f114",
    amount: 256,
    date: "2023-05-03",
  },
  {
    id: "341",
    name: "Cecelia Lemke",
    customer_id: "728ed52f114",
    amount: 91,
    date: "2022-02-28",
  },
  {
    id: "342",
    name: "Cecelia Lemke",
    customer_id: "728ed52f114",
    amount: 97,
    date: "2023-07-14",
  },
  {
    id: "343",
    name: "Emmett Heidenreich",
    customer_id: "728ed52f115",
    amount: 48,
    date: "2023-10-15",
  },
  {
    id: "344",
    name: "Emmett Heidenreich",
    customer_id: "728ed52f115",
    amount: 21,
    date: "2023-11-06",
  },
  {
    id: "345",
    name: "Emmett Heidenreich",
    customer_id: "728ed52f115",
    amount: 4689,
    date: "2024-08-04",
  },
  {
    id: "346",
    name: "Philip Bailey",
    customer_id: "728ed52f116",
    amount: 213,
    date: "2024-05-20",
  },
  {
    id: "347",
    name: "Philip Bailey",
    customer_id: "728ed52f116",
    amount: 363,
    date: "2024-07-24",
  },
  {
    id: "348",
    name: "Philip Bailey",
    customer_id: "728ed52f116",
    amount: 34,
    date: "2023-07-16",
  },
  {
    id: "349",
    name: "Mathew Pfannerstill IV",
    customer_id: "728ed52f117",
    amount: 234,
    date: "2023-05-17",
  },
  {
    id: "350",
    name: "Mathew Pfannerstill IV",
    customer_id: "728ed52f117",
    amount: 1455,
    date: "2022-11-25",
  },
  {
    id: "351",
    name: "Mathew Pfannerstill IV",
    customer_id: "728ed52f117",
    amount: 4175,
    date: "2024-10-26",
  },
  {
    id: "352",
    name: "Mr. Elmer Witting",
    customer_id: "728ed52f118",
    amount: 1946,
    date: "2024-12-29",
  },
  {
    id: "353",
    name: "Mr. Elmer Witting",
    customer_id: "728ed52f118",
    amount: 81,
    date: "2023-06-06",
  },
  {
    id: "354",
    name: "Mr. Elmer Witting",
    customer_id: "728ed52f118",
    amount: 431,
    date: "2024-12-30",
  },
  {
    id: "355",
    name: "Robyn Stanton",
    customer_id: "728ed52f119",
    amount: 4072,
    date: "2022-05-11",
  },
  {
    id: "356",
    name: "Robyn Stanton",
    customer_id: "728ed52f119",
    amount: 94,
    date: "2023-12-10",
  },
  {
    id: "357",
    name: "Robyn Stanton",
    customer_id: "728ed52f119",
    amount: 256,
    date: "2024-05-21",
  },
  {
    id: "358",
    name: "Elisa Wuckert DDS",
    customer_id: "728ed52f120",
    amount: 6,
    date: "2024-10-14",
  },
  {
    id: "359",
    name: "Elisa Wuckert DDS",
    customer_id: "728ed52f120",
    amount: 1686,
    date: "2022-08-13",
  },
  {
    id: "360",
    name: "Elisa Wuckert DDS",
    customer_id: "728ed52f120",
    amount: 343,
    date: "2022-05-14",
  },
  {
    id: "361",
    name: "Bradley Thompson",
    customer_id: "728ed52f121",
    amount: 42,
    date: "2024-08-26",
  },
  {
    id: "362",
    name: "Bradley Thompson",
    customer_id: "728ed52f121",
    amount: 304,
    date: "2023-01-20",
  },
  {
    id: "363",
    name: "Bradley Thompson",
    customer_id: "728ed52f121",
    amount: 31,
    date: "2024-04-12",
  },
  {
    id: "364",
    name: "Miss Sarah Bradtke",
    customer_id: "728ed52f122",
    amount: 2316,
    date: "2022-06-21",
  },
  {
    id: "365",
    name: "Miss Sarah Bradtke",
    customer_id: "728ed52f122",
    amount: 346,
    date: "2023-06-24",
  },
  {
    id: "366",
    name: "Miss Sarah Bradtke",
    customer_id: "728ed52f122",
    amount: 1345,
    date: "2022-12-26",
  },
  {
    id: "367",
    name: "Bridget Erdman",
    customer_id: "728ed52f123",
    amount: 13,
    date: "2024-05-28",
  },
  {
    id: "368",
    name: "Bridget Erdman",
    customer_id: "728ed52f123",
    amount: 258,
    date: "2023-05-10",
  },
  {
    id: "369",
    name: "Bridget Erdman",
    customer_id: "728ed52f123",
    amount: 461,
    date: "2023-10-25",
  },
];

export const getMonthlyTransactionData = (data: Transaction[]) => {
  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const monthColors: { [key: string]: string } = {
    january: "var(--color-january)",
    february: "var(--color-february)",
    march: "var(--color-march)",
    april: "var(--color-april)",
    may: "var(--color-may)",
    june: "var(--color-june)",
    july: "var(--color-july)",
    august: "var(--color-august)",
    september: "var(--color-september)",
    october: "var(--color-october)",
    november: "var(--color-november)",
    december: "var(--color-december)",
  };

  const transactionsByMonth: { [key: string]: number } = data.reduce(
    (acc: { [key: string]: number }, transaction) => {
      const monthIndex = new Date(transaction.date).getMonth();
      const monthName = monthNames[monthIndex];
      if (!acc[monthName]) {
        acc[monthName] = 0;
      }
      acc[monthName]++;
      return acc;
    },
    {}
  );

  return monthNames.map((month) => ({
    month,
    transaction: transactionsByMonth[month] || 0,
    fill: monthColors[month],
  }));
};

interface CustomerTotal {
  id: string;
  name: string;
  customer_id: string;
  totalAmount: number;
}

export const calculateTotalAmountPerCustomer = (transactions: Transaction[]): CustomerTotal[] => {
  const totalAmounts: Record<string, number> = {};

  transactions.forEach((transaction) => {
    const { customer_id, amount } = transaction;
    if (totalAmounts[customer_id]) {
      totalAmounts[customer_id] += amount;
    } else {
      totalAmounts[customer_id] = amount;
    }
  });

  // Format the result into the desired structure
  const result = Object.keys(totalAmounts).map((customer_id) => ({
    id: customer_id,
    name: transactions.find((t) => t.customer_id === customer_id)?.name || "",
    customer_id: customer_id,
    totalAmount: totalAmounts[customer_id],
  }));

  return result;
};

export type SummaryItem = {
  date: string;
  [yearLabel: string]: number | string;
};
export type MonthlyPeaks = {
  month: string;
  day: string;
  transactions: number;
};
export type YearlyMonthlyPeaks = {
  [key: string]: MonthlyPeaks[];
};
export const summarizeTransactions = (transactions: Transaction[]): SummaryItem[] => {
  const summary: { [dateKey: string]: SummaryItem } = {};

  // Get the current year
  const currentYear = new Date().getFullYear();

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    const day = date.getDate();
    const month = date.getMonth() + 1; // months are zero-indexed
    const year = date.getFullYear();

    const dateKey = `${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;

    if (!summary[dateKey]) {
      summary[dateKey] = {
        date: `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`,
      };
    }

    // Determine the year label (year24, year23, etc.)
    const yearLabel = `year${currentYear - year + 1}`;

    if (!summary[dateKey][yearLabel]) {
      summary[dateKey][yearLabel] = 0;
    }

    // Cast to number before using +=
    (summary[dateKey][yearLabel] as number) += 1;

    // Update the date to the latest year
    const existingDate = new Date(summary[dateKey].date);
    if (date > existingDate) {
      summary[dateKey].date = transaction.date;
    }
  });

  // Ensure each date has entries for all years in the range
  const years = [
    ...new Set(transactions.map((transaction) => new Date(transaction.date).getFullYear())),
  ];
  const result: SummaryItem[] = Object.values(summary).map((item) => {
    const summaryItem: SummaryItem = {
      date: item.date,
    };
    years.forEach((year) => {
      const yearLabel = `year${currentYear - year + 1}`;
      summaryItem[yearLabel] = item[yearLabel] || 0;
    });
    return summaryItem;
  });

  // Sort result by month
  result.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getMonth() - dateB.getMonth() || dateA.getDate() - dateB.getDate();
  });

  return result;
};

export function findMonthlyPeaks(transactions: Transaction[]): YearlyMonthlyPeaks {
  const yearlyMonthlyPeaks: YearlyMonthlyPeaks = {};

  // Group transactions by year and month
  const groupedTransactions = transactions.reduce((acc, transaction) => {
    const date = new Date(transaction.date);
    const year = date.getFullYear().toString();
    const month = date.toLocaleString("en-US", { month: "long" });

    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = [];
    }
    acc[year][month].push(transaction);
    return acc;
  }, {} as { [key: string]: { [key: string]: Transaction[] } });

  // Find the most frequent day and corresponding transactions count for each month in each year
  for (const year in groupedTransactions) {
    for (const month in groupedTransactions[year]) {
      const dailyCounts: { [key: string]: number } = {};
      groupedTransactions[year][month].forEach((transaction) => {
        const day = new Date(transaction.date).getDate().toString();
        if (!dailyCounts[day]) {
          dailyCounts[day] = 0;
        }
        dailyCounts[day]++;
      });

      // Find the day with the highest count
      let mostFrequentDay = "";
      let maxCount = 0;
      for (const day in dailyCounts) {
        if (dailyCounts[day] > maxCount) {
          mostFrequentDay = day;
          maxCount = dailyCounts[day];
        }
      }

      // Initialize the array if it's not yet initialized
      if (!yearlyMonthlyPeaks[year]) {
        yearlyMonthlyPeaks[year] = [];
      }

      // Add to the corresponding year's monthly peaks
      yearlyMonthlyPeaks[year].push({ month, day: mostFrequentDay, transactions: maxCount });
    }
  }
  const peaks = sortMonthlyPeaks(yearlyMonthlyPeaks);
  return peaks;
}

function sortMonthlyPeaks(yearlyMonthlyPeaks: YearlyMonthlyPeaks): YearlyMonthlyPeaks {
  const sortedPeaks: YearlyMonthlyPeaks = {};

  for (const year in yearlyMonthlyPeaks) {
    sortedPeaks[year] = yearlyMonthlyPeaks[year].sort((a, b) => {
      const monthsOrder = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return monthsOrder.indexOf(a.month) - monthsOrder.indexOf(b.month);
    });
  }

  return sortedPeaks;
}
