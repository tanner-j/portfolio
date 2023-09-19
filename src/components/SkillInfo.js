import React from 'react'

function SkillInfo(props) {
    const { name, skillType, imageUrl, experience } = props;

    return (
                <div className="skill" data-skill-type={skillType}>
                    <div className="skill-icon">
                        <img src={imageUrl.default} class alt={'${name} +  icon'}></img>
                    </div>
                    <div className="skill-info">
                        <p className="font-semibold text-lg">{name}</p>
                        <span className="text-color-font-detail">{experience}</span>
                    </div>
                </div>
    );
}

export default SkillInfo;
