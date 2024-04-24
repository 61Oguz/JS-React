import React from "react";

function Course({ image, title, description }) {
  //const image = props.image ;
  //const title = props.title ;
  //const description = props.description;
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={image} />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{title}</p>
          </div>
        </div>

        <div class="content">{description}</div>
      </div>
    </div>

    //     <div>
    //         <img src = {image} class="images"/>
    //         <div>{title}</div>
    //         <div>{description}</div>
    //     </div>
    // );
  );
}

export default Course;
