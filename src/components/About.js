import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center pt-5">About</h1>
                <div className="row pt-5 pb-5 mt-2 mb-2 justify-content-center">
                    <div className="col-md-8">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About