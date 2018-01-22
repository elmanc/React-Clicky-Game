import React, { Component } from 'react';
import './App.css';
import cars from './cars.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import CarCard from './components/CarCard'

class App extends Component {
    state = {
        message: "To start click a image!",
        topScore: 0,
        carScore: 0,
        cars: cars,
        unselectedcars: cars
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    carSelection = car => {
        const carLocate = this.state.unselectedcars.find(item => item.car === car);

        if(carLocate === undefined) {
            this.setState({ 
                message: "Incorrect Guess!",
                topScore: (this.state.carScore > this.state.topScore) ? this.state.carScore : this.state.topScore,
                carScore: 0,
                cars: cars,
                unselectedcars: cars
            });
        }
        else {
            const addcars = this.state.unselectedcars.filter(item => item.car !== car);
            
            this.setState({ 
                message: "Correct Guess!",
                carScore: this.state.carScore + 1,
                cars: cars,
                unselectedcars: addcars
            });
        }

        this.shuffleArray(cars);
    };


    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    carScore={this.state.carScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.cars.map(cars => (
                        <CarCard
                            car={cars.car}
                            image={cars.image}
                            carSelection={this.carSelection} 
                            carScore={this.state.carScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}


export default App;

