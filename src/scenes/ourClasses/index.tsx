import { ClassType, SelectedPage } from "@/shared/type";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Basic Trainin system for all ages people,gym center sports complex Bodybuilding room, Fitness We have a bodybuilding area with free weights and guides (of different brands: JBS, Hammer Strength, technogym, panatta), a dumbbell",
    image: image1,
  },
  {
    name: "Body Building Classes",
    description:
      "Basic Trainin system for all ages people,gym center sports complex Bodybuilding room, Fitness We have a bodybuilding area with free weights and guides (of different brands: JBS, Hammer Strength, technogym, panatta), a dumbbell",
    image: image2,
  },
  {
    name: "Weight Loss Classes",
    description:
      "Basic Trainin system for all ages people,gym center sports complex Bodybuilding room, Fitness We have a bodybuilding area with free weights and guides (of different brands: JBS, Hammer Strength, technogym, panatta), a dumbbell",
    image: image3,
  },
  {
    name: "Fitness Classes",

    image: image4,
  },
  {
    name: "Yoga Classes",
    description:
      "Basic Trainin system for all ages people,gym center sports complex Bodybuilding room, Fitness We have a bodybuilding area with free weights and guides (of different brands: JBS, Hammer Strength, technogym, panatta), a dumbbell,gym center sports complex Bodybuilding room, Fitness We have a bodybuilding area with free weights and guides (of different brands: JBS, Hammer Strength, technogym, panatta), a dumbbell",
    image: image5,
  },
  {
    name: "AB Core Classes",
    description:
      "Basic Trainin system for all ages people,gym center sports complex Bodybuilding room, Fitness We have a bodybuilding area with free weights and guides (of different brands: JBS, Hammer Strength, technogym, panatta), a dumbbell",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ab
              architecto, in repellendus eligendi, quam adipisci sunt aliquam
              nam libero ratione aut sed suscipit quis quas dolorem odio
              repudiandae beatae.
            </p>
          </div>
        </motion.div>
        {/* overflow for scrolling right */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
