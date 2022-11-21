// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      id: 0,
      title: "Figurita octocat",
      price: 100,
      image: "http://localhost:3000/img/octocat.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis, elit hendrerit sollicitudin sodales, tellus dui gravida mauris, a sodales metus risus nec tortor. ",
    },
    {
      id: 1,
      title: "Gorra",
      price: 100,
      image: "http://localhost:3000/img/hat.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis, elit hendrerit sollicitudin sodales, tellus dui gravida mauris, a sodales metus risus nec tortor. ",
    },
    {
      id: 2,
      title: "Sudadera Halo",
      price: 100,
      image: "http://localhost:3000/img/tshirt01.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis, elit hendrerit sollicitudin sodales, tellus dui gravida mauris, a sodales metus risus nec tortor. ",
    },
    {
      id: 3,
      title: "Introvert T-shirt",
      price: 200,
      image: "http://localhost:3000/img/tshirt02.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis, elit hendrerit sollicitudin sodales, tellus dui gravida mauris, a sodales metus risus nec tortor. ",
    },
    {
      id: 4,
      title: "Invertocat 2.0 Coasters",
      price: 30,
      image: "http://localhost:3000/img/coaster01.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis, elit hendrerit sollicitudin sodales, tellus dui gravida mauris, a sodales metus risus nec tortor. ",
    },
    {
      id: 5,
      title: "Glow in the Dark Sticker Pack ",
      price: 5,
      image: "http://localhost:3000/img/stickers02.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis, elit hendrerit sollicitudin sodales, tellus dui gravida mauris, a sodales metus risus nec tortor. ",
    },
    {
      id: 6,
      title: "Adventure Sticker Pack",
      price: 10,
      image: "http://localhost:3000/img/stickers01.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis, elit hendrerit sollicitudin sodales, tellus dui gravida mauris, a sodales metus risus nec tortor. ",
    },
    {
      id: 7,
      title: "Invertocat Pullover Hoodie",
      price: 10,
      image: "http://localhost:3000/img/pullover01.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis, elit hendrerit sollicitudin sodales, tellus dui gravida mauris, a sodales metus risus nec tortor. ",
    },
  ]);
}
