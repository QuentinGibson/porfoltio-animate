import React from 'react';
import Project from 'components/Project'

function Grid() {
    return ( 
        <div className="section no-padding-top no-padding-bottom">
            <div className="container">
                <div className="col lg-12">
                    <div className="filter-menu">
                        <button className="button button--is-active js-button-filter w-button">all</button>
                        <button className="js-button-filter button w-button">Websites</button>
                        <button className="js-button-filter button w-button">Personal</button>
                    </div>
                </div>
            </div>
            <div className="container is-fullwidth">
                <div className="col lg-12 margin-bottom position-relative container">
                    <div className="w-layout-grid c-grid3x3 is-filterable-grid">
                        <Project name={"Hello"} image="https://via.placeholder.com/700x700.png?text=IMAGE 700w" />
                        <Project name={"Hello"} image="https://via.placeholder.com/700x700.png?text=IMAGE 700w" />
                        <Project name={"Hello"} image="https://via.placeholder.com/700x700.png?text=IMAGE 700w" />
                        <Project name={"Hello"} image="https://via.placeholder.com/700x700.png?text=IMAGE 700w" />
                        <Project name={"Hello"} image="https://via.placeholder.com/700x700.png?text=IMAGE 700w" />
                        <Project name={"Hello"} image="https://via.placeholder.com/700x700.png?text=IMAGE 700w" />
                        <Project name={"Hello"} image="https://via.placeholder.com/700x700.png?text=IMAGE 700w" />
                        <Project name={"Hello"} image="https://via.placeholder.com/700x700.png?text=IMAGE 700w" />
                        <Project name={"Hello"} image="https://via.placeholder.com/700x700.png?text=IMAGE 700w" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Grid;