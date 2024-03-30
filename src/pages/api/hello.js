// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let users = [
  { name: "Noor Mohammed", role: "Developer" },
  { name: "Noor Mohammed", role: "Developer" },
  { name: "Noor Mohammed", role: "Developer" },
  { name: "Noor Mohammed", role: "Developer" },
  { name: "Noor Mohammed", role: "Developer" },
  { name: "Noor Mohammed", role: "Developer" },
  { name: "Noor Mohammed", role: "Developer" },
  { name: "Noor Mohammed", role: "Developer" },
  { name: "Noor Mohammed", role: "Developer" },
  { name: "Noor Mohammed", role: "Developer" },
];
export default function handler(req, res) {
  res.status(200).json(users);
}
