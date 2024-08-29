export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      massage: "massage",
      status: 200,
      data: {
        name: "John Doe",
        email: "john@doe.com",
      },
    });
  } else if (req.method === "POST") {
    return res.status(200).json({
      massage: "massage",
      status: 200,
      data: {
        name: "John Doe",
        email: "john@doe.com",
      },
    });
  } else if (req.method === "PUT") {
    return res.status(200).json({
      massage: "massage",
      status: 200,
      data: {
        name: "John Doe",
        email: "john@doe.com",
      },
    });
  } else if (req.method === "DELETE") {
    return res.status(200).json({
      massage: "massage",
      status: 200,
      data: {
        name: "John Doe",
        email: "john@doe.com",
      },
    });
  }
}
