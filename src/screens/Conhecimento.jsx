import Card from '../components/Card'
import js_svg from '../assets/img/logo_js.svg'
import react_svg from '../assets/img/react-2.svg'
import react_native_svg from '../assets/img/react-native-1.svg'
import html_svg from '../assets/img/html-1.svg'
import css_svg from '../assets/img/css-3.svg'
import oracle_svg from '../assets/img/oracle-6.svg'
import power_bi_svg from '../assets/img/power-bi.svg'

export default () => {
    function imageItem(img, width, alt) {
        return (
            <span>
                <img src={img}
                    style={{ width: width }}
                    alt={alt}
                />
            </span>
        )
    }

    const js_logo = imageItem(js_svg, '80px', 'js logo');
    const react_logo = imageItem(react_svg, '80px', 'react logo');
    const html_logo = imageItem(html_svg, '80px', 'html logo');
    const css_logo = imageItem(css_svg, '80px', 'css logo');
    const oracle_logo = imageItem(oracle_svg, '80px', 'oracle logo');
    const power_bi_logo = imageItem(power_bi_svg, '80px', 'power bi logo');
    const react_native_logo = imageItem(
        react_native_svg,
        '100px',
        'react native logo'
    );

    return (
        <>
            <Card label="Java Script" value={js_logo} />
            <Card label="React" value={react_logo} />
            <Card label="React Native" value={react_native_logo} />
            <Card label="HTML" value={html_logo} />
            <Card label="CSS" value={css_logo} />
            <Card label="Oracle DB" value={oracle_logo} />
            <Card label="Power BI" value={power_bi_logo} />
        </>

    )
}