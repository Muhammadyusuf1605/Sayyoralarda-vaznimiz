import Yer from '../assets/planet-earth.svg'
import Yupiter from '../assets/planet-jupiter.svg'
import Mars from '../assets/planet-mars.svg'
import Merkuriy from '../assets/planet-mercury.svg'
import Neptun from '../assets/planet-neptune.svg'
import Saturn from '../assets/planet-saturn.svg'
import Uran from '../assets/planet-uranus.svg'
import Venus from '../assets/planet-venus.svg'
function Vazn({ yerdagiVazn }) {
    const mercury = Math.floor(3.7 * yerdagiVazn / 9.81)
    const venus = Math.floor(8.87 * yerdagiVazn / 9.81)
    const earth = Math.floor(9.81 * yerdagiVazn / 9.81)
    const mars = Math.floor(3.71 * yerdagiVazn / 9.81)
    const jupiter = Math.floor(24.79 * yerdagiVazn / 9.81)
    const saturn = Math.floor(10.44 * yerdagiVazn / 9.81)
    const uranus = Math.floor(8.69 * yerdagiVazn / 9.81)
    const neptune = Math.floor(11.15 * yerdagiVazn / 9.81)

    console.log(mercury);
    // const gravitationalAccelerations = {
    //     mercury: 3.7,
    //     venus: 8.87,
    //     earth: 9.81,
    //     mars: 3.71,
    //     jupiter: 24.79,
    //     saturn: 10.44,
    //     uranus: 8.69,
    //     neptune: 11.15,
    //   };

    // for (const property in gravitationalAccelerations) {
    //   console.log(`${property} ${gravitationalAccelerations[property]}`);
    // }

    return (
        <div className='sayyoralar'>
            <div className='Img-con'>
                <img className='sayyora-img' src={Yer} alt="Sayyoralar" />
                <h2>Yer</h2>
                <h3>{earth}.00 Kg</h3>
            </div>
            <div className='Img-con'>
                <img className='sayyora-img' src={Yupiter} alt="Sayyoralar" />
                <h2>Jupiter</h2>
                <h3>{jupiter}.00 Kg</h3>
            </div>
            <div className='Img-con'>
                <img className='sayyora-img' src={Mars} alt="Sayyoralar" />
                <h2>Mars</h2>
                <h3>{mars}.00 Kg</h3>
            </div>
            <div className='Img-con'>
                <img className='sayyora-img' src={Merkuriy} alt="Sayyoralar" />
                <h2>Merkuriy</h2>
                <h3>{mercury}.00 Kg</h3>
            </div>
            <div className='Img-con'>
                <img className='sayyora-img' src={Neptun} alt="Sayyoralar" />
                <h2>Neptun</h2>
                <h3>{neptune}.00 Kg</h3>
            </div>
            <div className='Img-con'>
                <img className='sayyora-img' src={Saturn} alt="Sayyoralar" />
                <h2>Saturn</h2>
                <h3>{saturn}.00 Kg</h3>
            </div>
            <div className='Img-con'>
                <img className='sayyora-img' src={Uran} alt="Sayyoralar" />
                <h2>Uran</h2>
                <h3>{uranus}.00 Kg</h3>
            </div>
            <div className='Img-con'>
                <img className='sayyora-img' src={Venus} alt="Sayyoralar" />
                <h2>Venus</h2>
                <h3>{venus}.00 Kg</h3>
            </div>
        </div>
    )
}

export default Vazn