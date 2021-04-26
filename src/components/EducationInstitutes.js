import React from 'react'
import ig from '../resources/igdtu.png'
import dav from '../resources/dav.png'
import cb from '../resources/cblocks.png'
import cour from '../resources/cour.png'
import linkedin from '../resources/linked.png'
import verzeo from '../resources/verzeo.png'

function EducationInstitutes() {
    return (
        <div class="bottom row">
            <div class="client col-md-2">
                <div class="animated fadeIn slower" style={{opacity: 1, height: "auto"}}>
                    <img src={ig} alt="client" style={{maxHeight: "100px", maxWidth: "110px"}} />
                </div>
            </div>
            <div class="client col-md-2">
                <div class="animated fadeIn slower" style={{opacity: 1, height: "auto"}}>
                    <img src={dav} alt="client" style={{maxHeight: "110px", maxWidth: "200px"}} />
                </div>
            </div>
            <div class="client col-md-2">
                <div class="animated fadeIn slower" style={{opacity: 1, height: "auto"}}>
                    <img src={cb} alt="client" />
                </div>
            </div>
            <div class="client col-md-2">
                <div class="animated fadeIn slower" style={{opacity: 1, height: "auto"}}>
                    <img src={cour} alt="client" style={{maxHeight: "90px"}} />
                </div>
            </div>
            <div class="client col-md-2">
                <div class="animated fadeIn slower" style={{opacity: 1, height: "auto"}}>
                    <img src={linkedin} alt="client" />
                </div>
            </div>
            <div class="client col-md-2">
                <div class="animated fadeIn slower" style={{opacity: 1, height: "auto"}}>
                    <img src={verzeo} alt="client" />
                </div>
            </div>
        </div>
    )
}

export default EducationInstitutes
