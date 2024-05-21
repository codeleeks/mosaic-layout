import { getRandomIndex } from "./random"

const DATA = [
  {
    title:
      'All About Daddy Printable, Fathers Day Printable, Fathers Day Print, Fathers Day Kid Craft, Fathers Day Craft, Fathers Day, Fathers Day kid',
    contents:
      '"Let your little one fill out this All About Daddy printable for Fathers Day this year! This Fathers Day Crafts activity is only $1.50 and can be printed as many times as you need! Dimensions: 11x8.5 Page ------------------------------------ PRODUCT DESCRIPTION ------------------------------------ -Instant Download -One high quality 8.5 x 11" JPG -Once purchased, you may save and print as many times as you would like! ------------------------------------ WHAT TO DO…',
  },
  {
    title:
      'Easy Father Day Gift - Handprint Grill Mitt | Woo! Jr. Kids Activities : Children Publishing',
    contents:
      'This easy Father Day gift to make is perfect for summer grilling.',
  },
  {
    title: '25 Last-Minute Homemade Gifts for Dad from the Kiddos',
    contents:
      'Are you needing a last-minute gift for dad from the kids? Here are 25 to choose from that are easy, quick, and DIY! AND, they are gifts Dad can actually USE! Click here to get started! #homemadegifts #giftsfordad #lastminutegifts #diy #fromkids #homemade',
  },
  {
    title:
      'First Day of School Bracelets Please READ ITEM DESCRIPTION Class Gift Student Gift From Teacher Team Bracelet - Etsy',
    contents:
      'These brightly colored bracelets are all made from the same strand of paracord, yet each is unique just as people are. Where one bracelet ends, the next begins, and symbolizes how we are all connected no matter how different we are. Whether you teach a kindergarten class, or a high school class, many students may be a little nervous about going back to school this Fall. Help ease the first day jitters for your class and to send a positive message of teamwork and support, along with a gift…',
  },
  {
    title:
      'Unique Ideas for Meaningful Student Gifts that Will not Break the Bank!',
    contents:
      'Find great student gift ideas that are cheap but good quality. These gifts can be used for class activities - art, problem solving, writing... Save money and buy quick, last minute gifts for any special occasion in your elementary classroom. Great for any holiday, all students can be included no matter what they celebrate. Check out this awesome list of easy gifts for elementary students.',
  },
  {
    title:
      'Cool Mom Eats: Down-to-earth recipes + help that make parenting easier',
    contents:
      'Teacher Appreciation Day printables for food gifts: teacher appreciation printable gift card holder at Crazy Little Projects',
  },
  {
    title: 'Fun Summer Gift For Students- Free Printable Gift Tags',
    contents:
      'Get the best list of high school graduation gift ideas for girls! From blankets to pens to headphones, you will find something you love!',
  },
  {
    title: 'Fun Summer Gift For Students- Free Printable Gift Tags',
    contents:
      'This end of year gift for students is so cute and incredibly inexpensive. The cute tags say "I hope your summer is chalk full of fun" and there are some challenges on it for the child to create. If you are looking for a great gift for your kids this is a perfect choice!',
  },
]

export function getRandomTitle() {
  const randomIndex = getRandomIndex(DATA.length)
  return DATA[randomIndex].title
}

export function getRandomContents() {
  return DATA[getRandomIndex(DATA.length)].contents
}

