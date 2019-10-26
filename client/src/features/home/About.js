import React, { useState, useEffect } from 'react'
import "./Home.css"
import { Container, Divider, Card, Grid, Image, Menu, Input, Segment } from 'semantic-ui-react';
import MissionCard from '../about/MissionCard';
import VisionCard from '../about/VisionCard';
import CreatersCard from '../about/CreatersCard';






const About = () => {
    const [activeItem, setActiveItem] = useState('Mission')

    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
    }

    let bio;
    let pic;

    if (activeItem === 'Mission') {
        bio = <MissionCard />
        pic = <Image src={'/assets/images/logo.png'} size='large' centered fluid />
    } else if (activeItem === 'Vision') {
        bio = <VisionCard />
        pic = <Image src={'/assets/images/flagLogo.png'} size='massive' centered fluid />
    } else if (activeItem === 'Creators') {
        bio = <CreatersCard />
        pic = <Image src={'/assets/images/Us.png'} size='large' centered fluid />
    }

    return (

        <div>

            <div className="bgimg-2 w3-display-container">
                <div className="w3-display-middle">
                    <span className="w3-xxlarge w3-text-white w3-wide">ABOUT US</span>
                    <div className="ui inverted divider"></div>
                </div>
            </div>

            <div 
            className="bgimg-3 w3-display-container w3-opacity-min" 
            id="aboutMe" 
            style={{
                minHeight:'1500px'
            }}
            >


                <div className="w3-display-middle">
                    <Container className="">
                        <Grid columns={2} stackable>
                            <Grid.Row>
                                <Grid.Column>
                                    <Container>
                                        <div w3-display-middle id="mission-card" >
                                            <Menu fluid widths={3} attached='top' tabular >
                                                <Menu.Item
                                                    className="primary"
                                                    name='Mission'
                                                    active={activeItem === 'Mission'}
                                                    onClick={handleItemClick}
                                                />
                                                <Menu.Item
                                                    className="info"
                                                    name='Vision'
                                                    active={activeItem === 'Vision'}
                                                    onClick={handleItemClick}
                                                />
                                                <Menu.Item
                                                    className="warning"
                                                    name='Creators'
                                                    active={activeItem === 'Creators'}
                                                    onClick={handleItemClick}
                                                />
                                            </Menu>

                                            <Segment padded='very' className={activeItem} fluid attached='bottom' style={{ height: "400px" }}>
                                             {bio}
                                            </Segment>
                                        </div>
                                    </Container>
                                </Grid.Column>
                                <Grid.Column>
                                    <div className="w3-content w3-display-container-middle w3-padding-64">
                                        {pic}
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </div>


                {/* <div className="bgimg-3 w3-display-container w3-opacity-min">
                    <div className="w3-display-middle">
                        <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
                    </div>
                </div> */}
            </div>


            {/* <Container className="w3-content w3-container w3-padding-64" id="contact">
                <h3 className="w3-center">WHERE I WORK</h3>
                <p className="w3-center"><em>I'd love your feedback!</em></p> */}

            {/* <Container className="w3-row w3-padding-32 w3-section w3-center"> */}
            {/* <Container className="w3-col m4 w3-container">
                        <img src="assets/images/yoga.jpg" className="w3-image w3-round" />
                    </Container> */}
            {/* <Container className="w3-col m12 w3-panel w3-center">
                        <Container className="w3-large w3-margin-bottom">
                            <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Chicago, US<br />
                            <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +00 151515<br />
                            <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: mail@mail.com<br />
                        </Container>
                        <p>Swing by for a cup of <i className="fa fa-coffee"></i>, or leave me a note:</p>
                        <form action="/action_page.php" target="_blank">
                            <Container className="w3-row-padding" style={{
                            //     margin: "0 -16px 8px -16px"
                             }}>
                                <Container className="w3-half">
                                    <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
                                </Container>
                                <Container className="w3-half">
                                    <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" />
                                </Container>
                            </Container>
                            <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
                            <button className="w3-button w3-black w3-right w3-section" type="submit">
                                <i className="fa fa-paper-plane"></i> SEND MESSAGE
                            </button>
                        </form>
                    </Container>
                </Container>
            </Container> */}

        </div>


    )
}

export default About
