import * as motion from "motion/react-client"
import type { Variants } from "motion/react"

export default function ScrollTriggered() {
    return (
        <div style={container}>
            {food.map(([emoji, hueA, hueB, a], i) => (
                <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} a={a} />
            ))}
        </div>
    )
}

interface CardProps {
    emoji: string
    hueA: number
    hueB: number
    i: number
    a: string
}

function Card({ emoji, hueA, hueB, i, a }: CardProps) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card">
               <a href={a} target="_blank" rel="noopener noreferrer">
                    <img src={emoji}/>
                </a>
            </motion.div>
        </motion.div>
    )
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    margin: "50px auto",
    maxWidth: '100%',
    paddingBottom: 72,
    width: '100%',
    display:'flex'
}

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingLeft: 70,
    marginBottom: -120,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    fontSize: 164,
    width: 200,
    height: 350,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

/**
 * ==============   Data   ================
 */

const food: [string, number, number, string][] = [
    ["https://http2.mlstatic.com/D_NQ_NP_608939-MLU77943899140_082024-O.webp",225,125,'https://www.youtube.com/watch?v=h_D3VFfhvs4'],
    ["https://http2.mlstatic.com/D_NQ_NP_820037-MLA43494931170_092020-O.webp", 340, 10,'https://www.youtube.com/watch?v=dsUXAEzaC3Q'],
    ["https://http2.mlstatic.com/D_NQ_NP_749593-MLA44107332024_112020-O.webp",300, 10,'https://www.youtube.com/watch?v=yURRmWtbTbo&list=PLE1F27AEE770AD638'],
    ["https://http2.mlstatic.com/D_NQ_NP_802573-MLA31122117746_062019-O.webp",60, 90,'https://www.youtube.com/watch?v=JbHI1yI1Ndk&list=PL6811B614A6DC86A2'],
    ["https://http2.mlstatic.com/D_NQ_NP_994845-MLA28012361440_082018-O.webp",10, 30,'https://www.youtube.com/watch?v=_ksnxNfrKrw'],
]