/** GitHub Pages project path — keep in sync with next.config basePath/assetPrefix */
export const BASE_PATH = "/harryliz-barbers-demo";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

export const SITE = {
  name: "Harryliz Barbers",
  tagline: "Precision cuts on Lower Road, SE16",
  description:
    "Harryliz Barbers is a premium barbershop in the heart of Lower Road, Bermondsey SE16. A welcoming, inclusive space with expert barbering and personalised service — trusted across South East London.",
  address: "134 Lower Road, London SE16 2UG",
  area: "Surrey Quays · Bermondsey · SE16",
  freshaUrl:
    "https://www.fresha.com/a/harryliz-barbers-london-134-lower-road-ioktr926",
  phoneDisplay: "07761 533632",
  phoneHref: "tel:+447761533632",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=134%20Lower%20Road%2C%20London%2C%20SE16%202UG",
  directionsUrl:
    "https://maps.google.com/?daddr=134%20Lower%20Road%2C%20London%2C%20SE16%202UG",
  reviewsNote: "230+ five-star Google reviews",
} as const;

export const HOURS = [
  { day: "Monday", hours: "12:00 pm – 7:00 pm" },
  { day: "Tuesday", hours: "12:00 pm – 7:00 pm" },
  { day: "Wednesday", hours: "12:00 pm – 7:00 pm" },
  { day: "Thursday", hours: "12:00 pm – 7:00 pm" },
  { day: "Friday", hours: "12:00 pm – 7:00 pm" },
  { day: "Saturday", hours: "10:00 am – 8:00 pm" },
  { day: "Sunday", hours: "2:00 pm – 8:00 pm" },
] as const;

export const SERVICES = [
  {
    name: "Regular Haircut",
    price: "£17",
    duration: "25 min",
    blurb: "Clean finish, shaped to your face and style.",
  },
  {
    name: "Fade",
    price: "£20",
    duration: "20 min",
    blurb: "Sharp blend from skin to length — kept tidy for SE16.",
  },
  {
    name: "Haircut Scissors Half Head",
    price: "£20",
    duration: "20 min",
    blurb: "Scissor work where it counts, without the full-head price.",
  },
  {
    name: "Haircut Scissors Full Head",
    price: "£25",
    duration: "30 min",
    blurb: "Full scissor cut with careful texture and balance.",
  },
  {
    name: "Haircut for teens",
    price: "£17",
    duration: "25 min",
    blurb: "School-ready and weekend-sharp, same chair standards.",
  },
  {
    name: "Children Haircut",
    price: "£15",
    duration: "20 min",
    blurb: "Patient, precise cuts for younger clients.",
  },
  {
    name: "Senior citizen Haircut",
    price: "£15",
    duration: "25 min",
    blurb: "Classic grooming with time to get it right.",
  },
  {
    name: "Style and Design For Hair",
    price: "£15",
    duration: "20 min",
    blurb: "Lines, patterns, and design work on request.",
  },
  {
    name: "Shaving",
    price: "£12",
    duration: "20 min",
    blurb: "Clean shave with a careful finish.",
  },
  {
    name: "Hot Towel and Facial Cream",
    price: "£10",
    duration: "15 min",
    blurb: "A reset for skin after the cut.",
  },
  {
    name: "Hair Washing",
    price: "£10",
    duration: "15 min",
    blurb: "Fresh start before styling.",
  },
  {
    name: "Hair colour / Dying",
    price: "£9",
    duration: "20 min",
    blurb: "Colour work booked through Fresha.",
  },
] as const;

export const GALLERY = [
  {
    src: asset("/images/hero-exterior.jpg"),
    alt: "Harryliz Barbers shopfront on Lower Road, London SE16",
  },
  {
    src: asset("/images/interior.jpg"),
    alt: "Interior chairs, mirrors, and grooming tools at Harryliz Barbers",
  },
  {
    src: asset("/images/lounge.jpg"),
    alt: "Waiting lounge with sofa and patterned wall at Harryliz Barbers",
  },
  {
    src: asset("/images/haircut.jpg"),
    alt: "Haircut session under warm lighting at Harryliz Barbers",
  },
  {
    src: asset("/images/cut-1.jpg"),
    alt: "Finished cut from the Harryliz Barbers portfolio",
  },
  {
    src: asset("/images/cut-2.jpg"),
    alt: "Fade and detail work from the Harryliz Barbers portfolio",
  },
  {
    src: asset("/images/cut-3.jpg"),
    alt: "Client cut result from Harryliz Barbers",
  },
  {
    src: asset("/images/cut-4.jpg"),
    alt: "Precision finish from the Harryliz Barbers portfolio",
  },
] as const;
