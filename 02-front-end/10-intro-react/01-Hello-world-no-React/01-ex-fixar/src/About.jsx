import React from 'react';

class About extends React.Component {
    render() {
        const skills = ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'React', 'Jest', 'TDD']; // adicione mais habilidades aqui
        const jsxSkills = skills.map((skill) => <li>{skill}</li>); // cria um array de tags <li>
        return (
            <div>
                <h1>Murilo</h1>
                <p>Engenheiro de formação, em transição de carreira</p>
                <h2>Minhas Habilidades</h2>
                <ul>{jsxSkills}</ul>
            </div>
        );
    }
}

export default About;