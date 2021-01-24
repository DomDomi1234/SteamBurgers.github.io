import React, { Component } from 'react';
import Challenge from '../components/Challenge/Challenge';
import Contact from '../modules/Contact/Contact';
import Cta from '../components/Cta/Cta';
import Hero from '../modules/Hero/Hero';
import Menu from '../modules/Menu/Menu';
import Nav from '../components/Nav/Nav';
import Quote from '../components/Quote/Quote';
import Product from '../components/Product/Product';
import './StyleGuide.scss';

class StyleGuide extends Component {
  render() {
    const content = this.props.content;
    const sections = content.styleguide.sections;
    const cssClass = 'StyleGuide';