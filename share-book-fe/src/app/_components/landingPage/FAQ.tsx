"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Qna {
  question: string,
  ans: string
}

const qnans: Qna[] = [
  {
    "question": "What is the purpose of this site?",
    "ans": "The purpose of our site is to facilitate book sharing within your neighborhood, allowing you to borrow and lend books easily and connect with fellow book lovers."
  },
  {
    "question": "How do I create a profile?",
    "ans": "To create a profile, sign up with your email, provide your details (such as your name, location, and reading preferences), and upload a profile picture. Once completed, you can start browsing and sharing books."
  },
  {
    "question": "Is this site only for borrowing books?",
    "ans": "No, this site is for all types of book-related activities. Whether you're looking to borrow books, lend your own, or connect with other book enthusiasts for discussions, you can find suitable options here."
  },
  {
    "question": "How do I search for a book?",
    "ans": "After creating a profile, you can use our search filters to find books that match your preferences in terms of genre, author, or availability. You can also see if the books are available for borrowing or for swapping."
  },
  {
    "question": "How can I contact other users?",
    "ans": "Once you find a book or a user you are interested in, you can send a message through our secure messaging system. This allows you to arrange meetups and discuss book sharing without sharing personal contact information initially."
  },
  {
    "question": "Is the information on my profile visible to everyone?",
    "ans": "Only registered users can see your profile. We take privacy seriously and ensure that personal information is protected. You can control what details are shared publicly."
  },
  {
    "question": "How do I ensure the safety of my books during exchanges?",
    "ans": "We recommend meeting in public places for the first few interactions, such as libraries or coffee shops. Always verify the condition of the book before and after the exchange. We also suggest bringing a friend along for added safety."
  },
  {
    "question": "Can I report inappropriate behavior or users?",
    "ans": "Yes, if you encounter any inappropriate behavior or feel uncomfortable with a user, you can report it using the report function on the site. Our team will review and take necessary action."
  },
  {
    "question": "Is there a cost to use this site?",
    "ans": "Basic membership is free, which allows you to create a profile and search for books. We will also offer premium memberships with additional features such as advanced search filters, unlimited messaging, and priority support. Currently, it is absolutely free."
  },
  {
    "question": "Can I delete my profile?",
    "ans": "Yes, you can delete your profile at any time by going to 'Account Settings' and selecting 'Delete Profile.' Please note that this action is irreversible."
  },
  {
    "question": "How do I edit my profile?",
    "ans": "You can edit your profile by logging in, going to your profile page, and clicking on the 'Edit Profile' button. Make the necessary changes and save them."
  },
  {
    "question": "Are there any restrictions on the types of books allowed?",
    "ans": "All types of books are welcome! Our platform is designed to accommodate books of all genres and types, including fiction, non-fiction, textbooks, and more."
  }
]

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Frequently asked questions
      </Typography>
      <Box sx={{ width: '100%' }}>
        {qnans.map(({ question, ans }, idx) => (
          <Accordion
            expanded={expanded === ('panel' + idx)}
            onChange={handleChange('panel' + idx)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${idx}d-content`}
              id={`panel${idx}d-header`}
            >
              <Typography component="h3" variant="subtitle2">
                {question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                {ans}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}