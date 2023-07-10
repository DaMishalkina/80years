import React, {FunctionComponent} from "react";
import {Layout} from "components/Layout/Layout";
import {ActionComponent} from "components/ActionComponent/ActionComponent";
import "pages/Home/Home.scss";
import alarmImage from "assets/alarmAnimatedImage.gif";
import noImage from "assets/noImage.jpeg";
import skeletonAnimatedImage from "assets/skeletonAnimatedImage.gif";

export const Home:FunctionComponent = ({}) => {
    return (
        <>
            <Layout>
                <div className="home-container">
                    <h1>About project</h1>
                    <p>Have you ever decided to start running straight from next Monday,
                        but then suddenly reconsidered and postponed your new life forward a week?
                        Then this app is for you!
                    </p>
                    <img src={alarmImage} alt="Gif with alarm clock" />
                    <h2>With 80years&rsquo; Weeks Tracker*</h2>
                    <p>You can actually see how many weeks you have got till
                        you &ldquo;expected&rdquo; end. It has never been so easy! All you need is to insert your
                        birthdate and number of years you hope you will spend on this side to our form and et voilà:
                        you will see crystal clear how much longer you can skip your workout.
                    </p>


                    <h3>No more...</h3>
                    <img src={noImage} alt="Funny no image"/>
                    <ul>
                        <li>meaningless dates</li>
                        <li>tomorrow diets</li>
                        <li>overtimes</li>
                    </ul>

                    <h3>Special bonus</h3>

                    <p>
                        You can change numbers of years everytime you return home after doctor appointment!
                    </p>
                    <p>
                        Memento mori and call already your mother!**
                    </p>
                    <img src={skeletonAnimatedImage} alt="Funny gif with skeleton" />
                    <p className="home-container__additions">
                        *Careful, this App can be addictive and increase your anxiety level by 100%,<br/>
                        **You can also check your mothers&rsquo;s &ldquo;life progress&rdquo;
                    </p>
                </div>
                <ActionComponent
                    buttonClassName="home-container__button"
                    label="Try it!"
                    variant="third"
                    link="/weeks_tracker"
                />
            </Layout>
        </>
    )
}