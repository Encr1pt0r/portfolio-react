export const data = [
    {
        "id": "profile",
        "imagePath": require('./assets/kevin.jpg'),
    },
    {
        "id": "opencv",
        "imagePath": require('./assets/opencv4android.png'),
        "title": "OpenCV4Android",
        "subtitle": "Face detection app with OpenCV on Android",
        "description": "For my final year project at university, I built an Android app that detects changes in faces over time using OpenCV (a popular open-source computer vision library). Overall, this project was not able to implement the library on Android. This project became a learning experience on how to approach researching feasibility and how to choose technology wisely for a project."
    },
    {
        "id": "walks-gj",
        "imagePath": require('./assets/mesh.jpg'),
        "title": "walks.gojauntly.com",
        "subtitle": "Search for walks near you with Go Jauntly",
        "description": "This was an extension to Go Jauntly's main website designed to enhance search engine optimisation. My primary role was to construct the UI based on designs using Nunjucks, SCSS and TypeScript. This project sharpened my skills with Git since multiple people were working on this project. "
    },
]

// An array can be created in attribute and then can be called like a normal array
// So just stack require() in square brackets like below...
// "imagePath": [require('./assets/opencv4android.png'), require('./assets/mesh.jpg')],
// props.data.imagePath[i]