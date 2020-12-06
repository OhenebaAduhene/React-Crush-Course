import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef);
        const height = this.imageRef.current.clientHeight;
        const spans = height /Math.ceil(150 +1);
        this.setState({spans})

    }

    render() {
        const {description,urls} = this.props.image;
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={description}/>
            </div>
        );
    }
}

export default ImageCard;