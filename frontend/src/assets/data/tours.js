import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
    itinerary: [
      {
        day: "1 Day: London – Westminster Bridge, Big Ben, Southbank",
        morning: [
          "Westminster Bridge: Scenic walk with iconic views of Big Ben and Parliament. Free entry.",
          "Churchill War Rooms: Explore the underground bunkers of WWII – $33."
        ],
        afternoon: [
          "Westminster Abbey: Self-guided tour of this historic coronation church – $32.",
          "Southbank Centre Art Exhibits: Contemporary culture and art. Entry – $10."
        ],
        evening: [
          "London Eye: Ride the iconic observation wheel for panoramic city views – $45.",
          "Evening walk along the South Bank: Watch the sunset over the Thames. Free entry."
        ]
      }
    ]
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Step into the heart of British history with this immersive day in Westminster.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
    itinerary: [
      {
        day: "1 Day: Bali – Ubud, Tegallalang, Sacred Monkey Forest",
        morning: [
          "Tegallalang Rice Terraces: Walk through Bali’s iconic lush rice fields. Donation-based – $3.",
          "Bali Swing: Try the famous jungle swing experience with views – $35."
        ],
        afternoon: [
          "Sacred Monkey Forest Sanctuary: Wander through temple ruins and watch monkeys – $10.",
          "Puri Lukisan Museum: Balinese art and sculpture in a peaceful garden setting – $7."
        ],
        evening: [
          "Traditional Balinese Dance at Ubud Palace: Watch a live Legong or Barong performance – $10.",
          "Campuhan Ridge Walk: Sunset stroll along a scenic ridge trail. Free entry.",
          "Local spa foot massage (1 hour): Wind down with a relaxing massage – $34."
        ]
      }
    ]
  },
  {
    id: "03",
    title: "Snowy Peaks, Thailand",
    city: "Chiang Mai",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Experience Thailand like never before in the misty highlands of Doi Inthanon — the Roof of Thailand. This high-altitude adventure brings you cool mountain air, cloud-kissed pagodas, jungle hikes, and cascading waterfalls.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
    itinerary: [
      {
        day: "1 Day: Thailand – Doi Inthanon, Royal Pagodas, Mountain Trails",
        morning: [
          "Doi Inthanon National Park Entrance Fee: Explore Thailand’s highest peak and enjoy cool mountain air – $10.",
          "Kew Mae Pan Nature Trail: Guided hike through cloud forest with panoramic views – $10."
        ],
        afternoon: [
          "Twin Royal Pagodas (Naphamethinidon & Naphaphonphumisiri): Beautiful mountaintop pagodas surrounded by gardens – Free with park entry.",
          "Siriphum Waterfall: Misty jungle waterfall viewpoint – Free."
        ],
        evening: [
          "Hill Tribe Market Visit: Shop handmade crafts and interact with Karen or Hmong locals – $10.",
          "Hot Herbal Foot Soak at Mountain Eco-Lodge or Local Spa – $14.",
          "Thai Cooking Class in the Hills (Evening Session): Learn and prepare your own dinner with local ingredients – $45."
        ]
      }
    ]
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Krabi",
    distance: 500,
    price: 99,
    address: 'Somewhere',
    maxGroupSize: 8,
    desc: "Welcome the day with a stunning sunrise over Railay Beach’s iconic limestone cliffs, followed by a jungle hike to one of the best hidden viewpoints in southern Thailand. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
    itinerary: [
      {
        day: "1 Day: Thailand – Railay Beach, Tiger Cave Temple, Ao Nang",
        morning: [
          "Sunrise at Railay Beach East: Watch the sky light up behind dramatic limestone cliffs. Free entry.",
          "Climb to Railay Viewpoint & Lagoon: A challenging jungle trek with rewarding views – Free."
        ],
        afternoon: [
          "Tiger Cave Temple (Wat Tham Suea): Climb 1,260 steps to panoramic views and Buddha shrines – Free.",
          "Krabi Emerald Pool: Swim in natural spring water surrounded by forest – $4 entry."
        ],
        evening: [
          "Ao Nang Sunset Walk: Stroll the beach promenade and local shops. Free entry.",
          "Night Market Thai Art Workshop: Join a hands-on batik or painting session – $15.",
          "Thai Massage at a Local Spa: 60-minute traditional Thai massage – $20."
        ]
      }
    ]
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Nusa Penida",
    distance: 500,
    price: 99,
    address: 'Somewhere',
    maxGroupSize: 8,
    desc: "Escape to Nusa Penida, Bali’s wild little sister, where towering cliffs meet untouched beaches. Your day begins with sunrise views from the iconic Kelingking Point, followed by an adventurous hike down to its legendary cove.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
    itinerary: [
    {
      day: "1 Day: Nusa Penida – Kelingking Beach, Broken Beach, Crystal Bay",
      morning: [
        "Kelingking Cliff Viewpoint: Iconic T-Rex shaped cliff with stunning views. Free entry.",
        "Hike down to Kelingking Beach: Steep trail with crystal clear water and dramatic waves. Free."
      ],
      afternoon: [
        "Broken Beach & Angel’s Billabong: Natural arch, tide pool, and cliff formations. Free entry.",
        "Peguyangan Waterfall: Cliffside stairs and sea temple – donation entry – $2.",
        "Coconut break or beach lounge rental: Relax at a beach café or daybed – $8."
      ],
      evening: [
        "Crystal Bay: Snorkeling in clear waters or lounging on the sand – snorkeling gear rental – $10.",
        "Sunset Yoga Class or Guided Beach Meditation: Breathe in the ocean breeze – $20.",
        "Balinese Healing Massage by the beach: 60-minute traditional massage – $25."
      ]
    }
  ]
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Tokyo, Japan",
    distance: 500,
    price: 99,
    address: 'Somewhere',
    maxGroupSize: 8,
    desc: "Experience a full day of cherry blossom magic in Tokyo, blending tradition, nature, and street culture.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
    itinerary: [
      {
        day: "1 Day: Tokyo – Ueno Park, Chidorigafuchi, Asakusa",
        morning: [
          "Ueno Park: Stroll through Tokyo’s iconic cherry blossom park. Free entry.",
          "Tokyo National Museum: Explore Japanese art and history – $5.",
          "Shitamachi Museum: Learn about Tokyo’s past neighborhood life – $4."
        ],
        afternoon: [
          "Chidorigafuchi Moat: Walk near the Imperial Palace. Free entry.",
          "Rowboat rental: 30-minute ride under the cherry blossoms – $7.",
        ],
        evening: [
          "Sensoji Temple: Explore Tokyo’s oldest temple. Free entry.",
          "Sumida Park: Riverside cherry blossom views at sunset. Free entry.",
          "Asakusa Culture & Tourism Center Observation Deck: City view over Asakusa and Skytree. Free entry.",
          "Edo Taito Traditional Crafts Center: View traditional artisan works – $5.",
          "Asakusa Hanayashiki Amusement Park: Entry to Japan’s oldest amusement park – $20.",
          "Sakura-themed dessert experience: Cultural tasting or themed cafe visit – $10."
        ]
      }
    ]
  },
  {
    id: "07",
    title: "Paris, France",
    city: "France",
    distance: 500,
    price: 99,
    address: 'Somewhere',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
    itinerary: [
      {
        day: "1 Day: Paris – Eiffel Tower, Louvre, Montmartre",
        morning: [
          "Eiffel Tower Grounds: Walk under the Iron Lady and take photos from Trocadéro. Free entry.",
          "Louvre Museum: Home of the Mona Lisa and global masterpieces – $19."
        ],
        afternoon: [
          "Tuileries Garden: Peaceful stroll among statues and fountains. Free entry.",
          "Orangerie Museum: View Monet's Water Lilies in a serene gallery – $12.",
          "Croissant-making Class: Hands-on bakery workshop – $30."
        ],
        evening: [
          "Montmartre Village Walk: Discover art streets, Sacré-Cœur views, and Parisian charm. Free entry.",
          "Wine & Cheese Tasting in a local cellar: Guided French flavors experience – $38."
        ]
      }
    ]
  },
  {
    id: "08",
    title: "Alpine Peaks, Switzerland",
    city: "Swiss Alps",
    distance: 500,
    price: 99,
    address: 'Somewhere',
    maxGroupSize: 8,
    desc: "Breathe in the crisp alpine air of Zermatt, where the snow-dusted Matterhorn watches over the charming mountain village. ",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
    itinerary: [
      {
        day: "1 Day: Zermatt – Matterhorn Views, Gornergrat, Alpine Village",
        morning: [
          "Matterhorn Glacier Trail Walk: Panoramic views of the Matterhorn. Free access from town area.",
          "Zermatlantis Museum: Explore Zermatt’s mountaineering history – $15."
        ],
        afternoon: [
          "Gornergrat Railway: Scenic cogwheel train to the snowy summit with 360° alpine views – $45.",
          "Snowshoeing Trail Rental: Rent snowshoes and explore marked winter paths – $20."
        ],
        evening: [
          "Alpine Chocolate Workshop: Create your own Swiss chocolate bar – $19.",
          "Evening Village Walk: Explore Zermatt’s fairy-tale alpine streets and wooden chalets. Free entry."
        ]
      }
    ]
  },
];

export default tours;
