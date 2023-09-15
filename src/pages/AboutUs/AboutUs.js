import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AboutUs.module.scss'
/*const members = [
        'Terrance Hill',
        'Jorge Lopez',
        'Jamal Mayon',
        'Shumar Mcpherson',
        'Jake Carlson',
        'Diego Vasquez',
        'Yami Narvaez'
]*/

export default function AboutUs() {

        return (
                <main className={styles.Team}>
                        <div className={styles.statement1}>
                                <p>
                                        <h1 className={styles.mission}>Mission Statement:</h1>
                                        Mission Statement: At IKEA , our mission is to transform houses into homes by providing high-quality, stylish, and functional furniture that enriches the lives of our customers. We are dedicated to offering an exceptional shopping experience, where craftsmanship,  affordability, and sustainability converge.
                                </p>
                        </div>
                        <div className={styles.names}>
                                <ul>
                                        <h2 className={styles.nameColor}>Terrance Hill</h2> - Scrum Master
                                        {/* <img>Picture of team member</img> */}
                                </ul>
                                <ul>
                                <h2 className={styles.nameColor}>Jorge Lopez</h2> - GitHub Manager
                                        {/* <img>Picture of team member</img> */}
                                </ul>
                                <ul>
                                <h2 className={styles.nameColor}>Jamal Mayon</h2> - User Services Manager
                                        {/* <img>Picture of team member</img> */}
                                </ul>
                                <ul>
                                <h2 className={styles.nameColor}>Shumar McPherson</h2> - Database Manager
                                        {/* <img>Picture of team member</img> */}
                                </ul>
                                <ul>
                                <h2 className={styles.nameColor}>Jake Carlson</h2> - User Services Manager
                                        {/* <img>Picture of team member</img> */}
                                </ul>
                                <ul>
                                <h2 className={styles.nameColor}>Diego Vasquez</h2> - Front End Manager
                                        {/* <img>Picture of team member</img> */}
                                </ul>
                                <ul>
                                <h2 className={styles.nameColor}>Yami Navaez</h2> - Styling Manager
                                        {/* <img>Picture of team member</img> */}
                                </ul>
                        </div>
                </main>
        )
}


/*
- PICTURES OF TEAM MEMBERS
- STATEMENT ABOUT WEBSITE
- MISSION STATEMENT - (use PowerPoint Statement)
*/

