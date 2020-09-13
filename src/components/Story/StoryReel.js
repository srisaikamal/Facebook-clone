import React from "react";
import Story from "./Story";
import "./storyreel.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useStateValue } from "../../Context/Stateprovider";

const StoryReel = () => {
  const [{ user, isAuth }, dispatch] = useStateValue();

  return (
    <>
      <div className="storyreel">
        <Story
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          profileSrc={user && user.photoURL}
          title="Kamal Vasamsetti"
        />
        <Story
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          profileSrc={user && user.photoURL}
          title="Kamal Vasamsetti"
        />
        <Story
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          profileSrc={user && user.photoURL}
          title="Kamal Vasamsetti"
        />
        <Story
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          profileSrc={user && user.photoURL}
          title="Kamal Vasamsetti"
        />
        <Story
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          profileSrc={user && user.photoURL}
          title="Kamal Vasamsetti"
        />
      </div>

      <div className="storyreel storyreel-phone">
        <Story
          image="https://images.unsplash.com/photo-1599905475595-b2f69eb28e8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          profileSrc={user && user.photoURL}
          title="Kamal Vasamsetti"
        />
        <Story
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          profileSrc={user && user.photoURL}
          title="Kamal Vasamsetti"
        />
      </div>
    </>
  );
};

export default StoryReel;
