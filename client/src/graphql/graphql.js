import { gql } from '@apollo/client'

const GET_AUTHORS = gql`
    query GetAuthors {
        getAuthors {
            author_id
            author_name
            author_age
            author_country
            total_published_works
            year_of_birth
            photo
            books {
              book_id
              book_name
              released_year
            }
          }
    }
`

const CREATE_AUTHORS = gql`
    mutation CreateAuthor($input : AuthorInput) {
      createAuthor(input : $input) {
        author_id
        author_name
        author_age
      }
    }
`

export { GET_AUTHORS , CREATE_AUTHORS }