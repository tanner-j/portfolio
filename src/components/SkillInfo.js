import React from 'react'

function SkillInfo(props) {
    const { name, skillType, imageUrl, alt, experience } = props;

    return (
                <div className="skill" data-skill-type={skillType}>
                    <div className="skill-icon">
                        <img src={imageUrl.default} alt={alt}></img>
                    </div>
                    <div className="skill-info">
                        <p className="font-semibold text-lg">{name}</p>
                        <span className="text-color-font-detail">{experience}</span>
                    </div>
                </div>
    );
}

export default SkillInfo;
