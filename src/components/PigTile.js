import React from 'react'

 class PigTile extends React.Component{

  state = {
    clicked: false,
    gifUrls: []
  }


  componentDidMount() {
    const url = 'https://api.tenor.com/v1/search?q=pigs&key=LIVDSRZULELA&limit=8&anon_id=3a76e56901d740da9e59ffb22b988242'
    fetch(url)
      .then(response => response.json())
      .then(response => response.results.map(gif => gif.media))
      .then(gifs => gifs.map(gif => gif[0].tinygif.url))
      .then(gifs => {
        this.setState({
          gifUrls: gifs
        })
      })
 }




  setGif = () => {
    const rando = Math.floor(Math.random() * 7 )
    // console.log(this.state.gifUrls[rando])
    // this.setState({dblclicked: !this.state.dblclicked})
    return this.state.gifUrls[rando]

  }

  getImage = (name) => {
    const snakeCaseName = name.toLowerCase().split(' ').join('_')
      let pigPic = require(`../hog-imgs/${snakeCaseName}.jpg`)
      return pigPic
  }

  handleClick = (e) => {
    this.setState({clicked: !this.state.clicked})
  }


  // <img  src={this.state.hover ? this.handleHover : this.getImage(name)} alt=''/>

  render () {
    const {name} = this.props

    const showFront = () => {
        return (
          <div >
            <h1 className='hoggyText'>{name}</h1>
            <img  src={this.getImage(name)} alt=''/>
          </div>
        )
    }


    const showBack = () => {
      return (
        <div>
          <img src={this.setGif()} alt=''/>
          <p>specialty: {this.props.specialty}</p>
          <p>greased: {this.props.greased.toString()}</p>
          <p>'weight as a ratio of hog to LG - 24.7
           Cu. Ft. French Door Refrigerator with Thru-the-Door
           Ice and Water': {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>'highest medal achieved': {this.props['highest medal achieved']}</p>
        </div>
      )
    }
    return (
      <div className='pigTile' onClick={this.handleClick} >
        {this.state.clicked ? showBack() : showFront()}
      </div>
    )
  }
}

export default PigTile
