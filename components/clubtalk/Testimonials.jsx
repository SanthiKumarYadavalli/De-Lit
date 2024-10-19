import { CLUB_TALK } from "@/utils/dummy";
import TestimonialRow from "./TestimonialRow";

export default function Testimonials() {
    const pairs = [];
    for (let i = 0; i < CLUB_TALK.length; i += 2) {
      pairs.push([CLUB_TALK[i], CLUB_TALK[i + 1] || null]);
    }
    return (
        <>
        {/* two cards per row in big screens */}
        <div className="min-h-screen lg:block hidden">
            {
                pairs.map((pair, index) => (
                    <TestimonialRow 
                        key={index}
                        firstRow={index === 0}
                        firstTheega={index % 2 === 0} 
                        talk1={pair[0]} 
                        talk2={pair[1]} 
                        lastAndSingle={pair[1] === null} 
                    />
                ))
            }
        </div>

        {/* one card per row in mobiles */}
        <div className="min-h-screen block lg:hidden">
            {
                CLUB_TALK.map((talk, index) => (
                    <TestimonialRow 
                        key={index} 
                        firstTheega={index % 2 === 0} 
                        talk1={talk} 
                        talk2={null} 
                    />
                ))
            }
        </div>
        </>
    )
}