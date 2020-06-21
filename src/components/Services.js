import React, { Component } from 'react';
import { FaCocktail, FaBeer, FaCoffee, FaChessBishop } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free cocktails",
                info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, illo!'
            },
            {
                icon: <FaBeer />,
                title: "FaBeer",
                info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, illo!'
            },
            {
                icon: <FaCoffee />,
                title: " FaCoffee",
                info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, illo!'
            },
            {
                icon: <FaChessBishop />,
                title: "FaChessBishop",
                info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, illo!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map(
                        (item, index) => {
                            return (
                                <article key={index} className='service'>
                                    <span> {item.icon} </span>
                                    <h6> {item.title} </h6>
                                    <p>  {item.info} </p>


                                </article>
                            )
                        }
                    )}
                </div>

            </section>
        )
    }
}
