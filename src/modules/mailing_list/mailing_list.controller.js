import db from '../../config/db.js';

const postMail = (req, res) => {
  const { email } = req.body;

  // Validate the data
  if (!email) {
    return res.status(400).json({ error: 'Email not provided' });
  }

  // First, check if email already exists in the mailing list
  const search_query = 'SELECT * FROM mailing_list WHERE email = ?';
  db.execute(search_query, [email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error', details: err });
    }
    if (result.length > 0) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // If email doesn't exist, insert into the database
    const query = 'INSERT INTO mailing_list (email) VALUES (?)';
    db.execute(query, [email], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error', details: err });
      }
      return res
        .status(201)
        .json({ message: 'Email stored successfully', id: result.insertId });
    });
  });
};

export const MailingListController = {
  postMail,
};
