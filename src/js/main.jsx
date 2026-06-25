import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
    <Navbar />
    <Hero />
    <div className="row m-auto">
      <Card imgUrl="https://picsum.photos/id/237/355/300" title="Card Title" desciption="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi." />
      <Card imgUrl="https://picsum.photos/id/281/355/300" title="Card Title" desciption="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi." />
      <Card imgUrl="https://picsum.photos/id/461/355/300" title="Card Title" desciption="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi." />
      <Card imgUrl="https://picsum.photos/id/364/355/300" title="Card Title" desciption="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi." />
    </div>
    <Footer />
  </div>
)
