/* eslint-disable react/prop-types */
export default function ProjectCard(props) {
    return (
        <>            
            <div className="card">
                <a href={props.url}>
                    <img src={props.image} className="card-img-top" alt={props.project} />
                </a>
                <div className="card-body">
                    <h5 className="card-title">{props.project}</h5>
                    <p className="card-text">{props.description}</p>                        
                </div>
            </div>            
        </>
    );
}