import React from 'react'

export default function Contact() {
    const numbers = [
        "+23409039021880",
        "+23407017329926",
        "+23408100559868",
        "+23407069624957",
        "+23408099424237",
        "+23407050987855"
    ]
    const address = ["PQ box, 34 Cookies street off Flan busstop.", "PQ box 18, 27 Chicken alfredo street off suya way.", "PO.Box 234 Pizza zone route 23 Truffles.", "PO.BOx Turkey salad of Coconut pot pie street, Macaroon."]
    const socialLink = ["facebook.com", "instagram.com", "gmail.com"];
    const htp = "https://www."; 
    const linkName = [<i class="fa-brands fa-facebook fa-bounce"></i>, <i class="fa-brands fa-instagram fa-bounce"></i>, <i class="fa-regular fa-envelope fa-bounce"></i> ];
    const links = [ socialLink.map((e)=>{ return htp + e})];
    return (
        <div className="bg-foot ">
            <div className="body-contact fs-sm text-light mx-3 text-center row pb-5">
                <h2 className="pb-2 pt-3" style={{"font-family": 'Lora'}}>Contact Us</h2>
                <div className="col-lg-4 col-md-6 col-6">
                    <p className="opacity-75" style={{"font-family": 'Lora'}}>Phone numbers</p>
                   {address.map((e) => {
                    return <p className="opacity-50 px-3">{e}</p>
                })}
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                <p className="opacity-75" style={{"font-family": 'Lora'}}>Address</p>
                 {numbers.map((e) => {
                        return <p className="opacity-50">{e}</p>
                    })}
                </div>
                <div className="col-lg-4 col-12">
                <p className="opacity-75" style={{"font-family": 'Lora'}}>Social links</p>
                {links[0].map((name, index)=>{
                 const gift =  linkName[index];
                      return <a href={name} style={{"font-family": 'Lora'}} className=" opacity-50 display-block text-decoration-none px-2 linkColor" target="_blank">{gift}</a>
                })}
                </div>
            </div>
        </div>
    )
}