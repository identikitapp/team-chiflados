import Post from "../../components/Post/Post"
import testImg1 from "../../public/testImg1.png"

let dataTest1 = {
    username: "adakoss",
    image: testImg1,
    date: "28 de diciembre",
    content: "texto de prueba texto de prueba texto de texto de prueba texto de prueba texto de prueba texto de prueba texto de",
    likes: 0,
    comments: []
}

const Publications = ()=> {

    return(
        <div className="publicationsContainer">
            <Post data={dataTest1} />
            <Post data={dataTest1} />
        </div>
    )
}

const Feed = () => {

    return (
        <div className="feedContainer">
            <Publications />
        </div>
    )
}

export default Feed