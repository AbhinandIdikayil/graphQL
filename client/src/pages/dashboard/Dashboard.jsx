import { useQuery, useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { GET_AUTHORS, CREATE_AUTHORS } from '../../graphql/graphql'
import { v4 as uuidV4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate();
    const { data, error, loading } = useQuery(GET_AUTHORS)
    const [createAuthorAPI, { data: createData }] = useMutation(CREATE_AUTHORS)
    useEffect(() => {
        console.log('created author', createData)
    }, [createData])

    function createAuthor(e) {
        e.preventDefault();
        let authorInputs = {}
        let elements = document.getElementById('create-author').elements

        authorInputs.author_id = uuidV4()
        authorInputs.author_name = elements.author_name.value
        authorInputs.author_age = Number(elements.author_age.value)
        authorInputs.author_country = elements.author_country.value
        authorInputs.total_published_works = Number(
            elements.total_published_works.value
        );
        authorInputs.year_of_birth = Number(elements.year_of_birth.value)
        authorInputs.photo = elements.photo.value;

        createAuthorAPI({ variables: { input: authorInputs } })
    }

    const navigateAuthor = (author) => {
        navigate('/author',{state: {author} })
    }

    return (
        <div style={{ display: 'flex', gap: '40px' }}>
            <div>
                {
                    data && data.getAuthors.map((author) => (
                        <div onClick={() => navigateAuthor(author)}>
                            <h3>{author.author_name}</h3>
                            <p>{author.author_country}</p>
                            <div>

                                <img src={author.photo} alt={author.author_name} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <h2>Author Information</h2>
                <form
                    action="/submit_author_info"
                    method="post"
                    enctype="multipart/form-data"
                    id="create-author"
                >
                    <label for="author_name">Author Name:</label>
                    <input type="text" id="author_name" name="author_name" required />
                    <br />

                    <label for="author_age">Author Age:</label>
                    <input type="number" id="author_age" name="author_age" required />
                    <br />

                    <label for="author_country">Author Country:</label>
                    <input
                        type="text"
                        id="author_country"
                        name="author_country"
                        required
                    />
                    <br />

                    <label for="total_published_works">Total Published Works:</label>
                    <input
                        type="number"
                        id="total_published_works"
                        name="total_published_works"
                        required
                    />
                    <br />
                    <label for="year_of_birth">Year of birth:</label>
                    <input
                        type="number"
                        id="year_of_birth"
                        name="year_of_birth"
                        required
                    />
                    <br />

                    <label for="photo">Author Photo:</label>
                    <input type="text" id="photo" name="photo" required />
                    <br />

                    <input
                        type="submit"
                        value="Submit"
                        onClick={(e) => createAuthor(e)}
                    />
                </form>
            </div>
        </div>
    )
}

export default Dashboard