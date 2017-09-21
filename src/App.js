import React , { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'


const Books = [
  {
    title: 'To Kill a Mockingbird',
    authors: 'Harper Lee',
    photoURL : "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"},
    {
      allowAnonLogging:true
      authors:["William E. Shotts, Jr."]
      averageRating:4
      canonicalVolumeLink:"http:/market.android.com/details?id=book-nggnmAEACAAJ"
      categories:["COMPUTERS"]
      contentVersion:"1.2.2.0.preview.2"
      description:"You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way   you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning guru:file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of  yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how t:* Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial 'shell shock,' you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's 'Evolution of a SysAdmin'"
      id:"nggnmAEACAAJ"
      imageLinks:{smallThumbnail: "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
      industryIdentifiers:(2) [{…}, {…}]
      infoLink:"https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api"
      language:"en"
      maturityRating:"NOT_MATURE"
      pageCount:480
      panelizationSummary:{containsEpubBubbles: false, containsImageBubbles: false}
      previewLink:"http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api"
      printType:"BOOK"
      publishedDate:"2012"
      publisher:"No Starch Press"
      ratingsCount:2
      readingModes:{text: true, image: false}
      shelf:"currentlyReading"
      subtitle:"A Complete Introduction"
      title:"The Linux Command Line"}
]


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books : []
  }

  componentDidMount() {
    // ContactsAPI.getAll().then( (contacts) => {
    //   this.setState( {contacts})
    // } ) // same as the below
    BooksAPI.getAll().then( (books) => {
      this.setState( {books})
    })
  }

  render() {
    console.log(this.state.books,'books')
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks/>
        ) : (
          <ListBooks/>
        )}
      </div>
    )
  }
}

export default BooksApp
