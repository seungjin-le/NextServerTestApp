const testData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@doe.com",
  },
  {
    id: 3,
    name: "John Smith",
    email: "john@smith.com",
  },
  {
    id: 4,
    name: "Jane Smith",
    email: "jane@smith.com",
  },
  {
    id: 5,
    name: "John Doe",
    email: "john@doe.com",
  },
];

export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ message: "Hello from Next.js!" });
  } else if (req.method === "GET") {
    res.status(200).json({
      data: testData,
      status: "success",
      message: "Data fetched successfully",
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }

  res.status(200).json({ message: "Hello from Next.js!" });
}
