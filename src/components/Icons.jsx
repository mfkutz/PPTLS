import logo from '../assets/images/logo.svg'
import bgTriangle from '../assets/images/bg-triangle.svg'
import iconClose from '../assets/images/icon-close.svg'
import iconPaper from '../assets/images/icon-paper.svg'
import iconRock from '../assets/images/icon-rock.svg'
import iconScissors from '../assets/images/icon-scissors.svg'
import imageRules from '../assets/images/image-rules.svg'



//FOR BONUS
import bgPentagon from '../assets/images/bg-pentagon.svg'
import logoBonus from '../assets/images/logo-bonus.svg'
import iconSpock from '../assets/images/icon-spock.svg'/* Spock*/
import iconLizard from '../assets/images/icon-lizard.svg' /* lagarto */
import imageRulesBonus from '../assets/images/image-rules-bonus.svg' /* rules LS */

const Icons = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <img src={bgTriangle} alt="" />
            <img src={iconClose} alt="" />
            <img src={iconPaper} alt="" />
            <img src={iconRock} alt="" />
            <img src={iconScissors} alt="" />
            {/* <img src={imageRules} alt="" /> */}




            {/* <img src={bgPentagon} alt="" /> */}
            {/* <img src={logoBonus} alt="" /> */}
            {/* <img src={iconLizard} alt="" /> */}
            {/*  <img src={iconSpock} alt="" /> */}
            {/* <img src={imageRulesBonus} alt="" /> */}
        </div>
    )
}

export default Icons