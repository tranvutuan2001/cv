import { Box, Center, Divider, Grid, Text } from '@chakra-ui/react';

const App = () => {
  return (
    <Center>
      <Box w={'100%'} h={'100vh'}>
        <Center color={'blue.500'}>
          <Text fontWeight={'bold'} fontSize={'lg'}>Tran Vu Tuan, Software Engineer</Text>
        </Center>
        <Center color={'blue.500'}>
          <Text>Email: tranvutuan2001@gmail.com</Text>
        </Center>
        <Center color={'blue.500'} mb={'10px'}>
          <Text>Mobile: +49 176 879 40054</Text>
        </Center>
        <Center mb={'10px'}>
          <Text>"Communication is the key to success"</Text>
        </Center>
        {/* <Box mb={'10px'}>
          <Text  textJustify={'inter-word'} textAlign={'justify'}>
            Hi, I'm Tuan, a software engineer based in Aachen. I have professional experience with various programming
            languages such as Java, Python, Typescript, Javascript. Nevertheless, my greatest strength is not programming
            skill but the logical thinking and the ability to make complicated topics easy to understand. I'm also a fast
            learner and a challenges lover. I'm looking forward to working with you. Have a nice day :)
          </Text>
        </Box> */}
        <Divider w={'100%'} orientation={'horizontal'} borderColor={'gray.400'} />

        {/*Education*/}
        <Box mt={'10px'} mb={'10px'}>
          <Box color={'blue.500'}>
            <Text fontSize={'lg'}>EDUCATION</Text>
          </Box>
          <Grid templateColumns={'1fr 1fr 1fr'}>
            <Box>
              <Text>April 2021 - April 2023</Text>
              <Text>Sep 2017 - March 2021</Text>
              <Text>July 2016 - July 2017</Text>
            </Box>
            <Box>
              <Text>Master Data Science</Text>
              <Text>Bachelor Computer Science</Text>
              <Text>University Preparation Course</Text>
            </Box>
            <Box>
              <Text>RWTH Aachen</Text>
              <Text>RWTH Aachen</Text>
              <Text>Studienkolleg Darmstadt</Text>
            </Box>
          </Grid>
        </Box>

        {/*Skills*/}
        <Divider w={'100%'} orientation={'horizontal'} borderColor={'gray.400'} />
        <Box mt={'10px'} mb={'10px'}>
          <Box color={'blue.500'}>
            <Text fontSize={'lg'}>SKILLS</Text>
          </Box>
          <Grid templateColumns={'1fr 2fr'}>
            <Box>
              <Text>Backend Development</Text>
              <Text>Frontend Development</Text>
              <Text>Databases</Text>
              <Text>Data Processing Tools</Text>
              <Text>CI/CD Tools</Text>
              <Text>Cloud Technologies</Text>
              <Text>Language</Text>
            </Box>
            <Box>
              <Text>Javascript, Typescript, NestJs, Java, Domain Driven Design</Text>
              <Text>HTML, CSS, ReactJs</Text>
              <Text>MongoDB, PostgresSQL</Text>
              <Text>Pytorch (Basic), Pandas, Gurobi</Text>
              <Text>Gitlab Pipeline (Basic), Docker</Text>
              <Text>Azure (Basic), Kubernetes (Basic)</Text>
              <Text>Vietnamese (native), English (C1), German (C1)</Text>
            </Box>
          </Grid>
        </Box>

        {/*Achievements*/}
        <Divider w={'100%'} orientation={'horizontal'} borderColor={'gray.400'} />
        <Box mt={'10px'} mb={'10px'}>
          <Box color={'blue.500'}>
            <Text fontSize={'lg'}>Achievements</Text>
          </Box>
          <Box>
            <Box><Text>- Help the company to win a deal with a billions dollars worth customer</Text></Box>
            <Box><Text>- Develop an application that helps a large logistic customer manage their complex delivery plan
              in real time. The application also draws the attentions of many other logistic companies and becomes one
              of the key product of the company.</Text></Box>
            <Box><Text>- Resolve a project that had been delayed for years</Text></Box>
          </Box>
        </Box>

        {/*Work Experience*/}
        <Divider w={'100%'} orientation={'horizontal'} borderColor={'gray.400'} />
        <Box mt={'10px'} mb={'10px'}>
          <Box color={'blue.500'}>
            <Text fontSize={'lg'}>WORK EXPERIENCE</Text>
          </Box>

          {/*Greenplan*/}
          <Grid templateColumns={'1fr 1fr 1fr'}>
            <Box><Text fontWeight={'bold'}>April 2023 - Now</Text></Box>
            <Box><Text fontWeight={'bold'}>Software Engineer and Operation Manager</Text></Box>
            <Box><Text fontWeight={'bold'}>Greenplan GmbH, Germany</Text></Box>
          </Grid>
          <Box pl={'20px'}>
            <Box pt={'20px'}><Text>Customer relations management</Text></Box>
            <Box pl={'20px'}>
              <Box><Text>- Manage IT communication with customers</Text></Box>
              <Box><Text>- Analyze, evaluate, and implement requirements of customers</Text></Box>
              <Box><Text>- Hold IT Workshops with customers</Text></Box>
              <Box><Text>- Evaluate possible IT risks </Text></Box>
            </Box>
            <Box pt={'20px'}><Text>In-house product development</Text></Box>
            <Box pl={'10px'}><Text>1. Develop an application to manage and manipulate logistic plan</Text></Box>
            <Box pl={'20px'}>
              <Box><Text>- Initialize the project from scratch</Text></Box>
              <Box><Text>- Design application architecture and data flow among multiple components</Text></Box>
              <Box><Text>- Design and develop test cases</Text></Box>
              <Box><Text>- Develop the backend with NestJs and Postgres</Text></Box>
              <Box><Text>- Collaborate with other team members</Text></Box>
            </Box>
            <Box pl={'10px'}><Text>2. Deploy and manage a dedicated Linux server</Text></Box>
            <Box pl={'20px'}>
              <Box><Text>- Design and develop automated pipeline to deploy and update applications running inside the
                server</Text></Box>
              <Box><Text>- Manage backup channel to minimize data loss in case of failures</Text></Box>
              <Box><Text>- Enhance security with SE Linux</Text></Box>
            </Box>
            <Box pl={'10px'}><Text>3. Develop backup solutions in Azure Cloud</Text></Box>
            <Box pl={'20px'}>
              <Box><Text>- Design backup solution in case of failures of production environments</Text></Box>
              <Box><Text>- Communicate with customers to customize the backup solutions after customer's
                needs</Text></Box>
              <Box><Text>- Evaluate the performance and IT risks of the backup solution</Text></Box>
            </Box>

            <Box pt={'20px'}><Text>IT Security</Text></Box>
            <Box pl={'10px'}>
              <Box><Text>- Manage communication channel with IT security teams of customers</Text></Box>
              <Box><Text>- Adapt IT infrastructure according to customer's security requirements</Text></Box>
              <Box><Text>- Plan the escalating matrix in case of security incidents</Text></Box>
            </Box>
          </Box>

          {/*USU*/}
          <Grid templateColumns={'1fr 1fr 1fr'} pt={'20px'}>
            <Box><Text fontWeight={'bold'}>Nov 2019 - Nov 2022</Text></Box>
            <Box><Text fontWeight={'bold'}>Software Engineer (part-time)</Text></Box>
            <Box><Text fontWeight={'bold'}>USU Technologies, Germany</Text></Box>
          </Grid>
          <Box pl={'20px'}>
            <Box pt={'20px'}><Text>Implement product features</Text></Box>
            <Box pl={'10px'}>
              <Box><Text>- Visualization of IT Infrastructure of large organization</Text></Box>
              <Box><Text>- Advance table search</Text></Box>
              <Box><Text>- Automatic document generation</Text></Box>
            </Box>
            <Box pt={'20px'}><Text>Develop and maintain automated tests</Text></Box>
            <Box pl={'10px'}>
              <Box><Text>- Automate frontend tests with Selenium</Text></Box>
              <Box><Text>- Automate backend test with JUnit, PHPUnit</Text></Box>
              <Box><Text>- Automate load test with JMeter</Text></Box>
              <Box><Text>- Deploy automated test to Google Cloud</Text></Box>
            </Box>
            <Box pt={'20px'}><Text>Maintain existing products</Text></Box>
            <Box pl={'10px'}>
              <Box><Text>- Fix reported bugs and broken tests</Text></Box>
              <Box><Text>- Optimize query speed if requested</Text></Box>
            </Box>
          </Box>
        </Box>

        {/*Private Projects*/}
        <Divider w={'100%'} orientation={'horizontal'} borderColor={'gray.400'} pt={'20px'} />
        <Box mt={'10px'} mb={'10px'}>
          <Box color={'blue.500'}>
            <Text fontSize={'lg'}>PRIVATE PROJECTS</Text>
          </Box>
          {/*Master*/}
          <Grid templateColumns={'1fr 1fr 1fr'} mt={'1px'} pt={'20px'}>
            <Box><Text fontWeight={'bold'}>Oct 2022 - April 2023</Text></Box>
            <Box><Text fontWeight={'bold'}>Master Thesis</Text></Box>
            <Box><Text fontWeight={'bold'}>USU Technologies, Germany</Text></Box>
          </Grid>
          <Box pl={'20px'}>
            <Box><Text>Optimize AWS Cost by Using Savings Plan</Text></Box>
            <Box pl={'10px'}>
              <Box><Text>- Calculate the optimal Savings Plan based on predicted resources
                consumption</Text></Box>
              <Box><Text>- Visualization with charts</Text></Box>
              <Box><Text>- Data-processing with Pandas, Gurobi</Text></Box>
              <Box><Text>- RESTful backend built with Flask (Python)</Text></Box>
              <Box><Text>- Connect to AWS with boto3</Text></Box>
              <Box><Text>- Frontend built with ReactJs, ChakraUI</Text></Box>
            </Box>
          </Box>
          {/* E-commerce */}
          <Grid templateColumns={'1fr 2fr'} pt={'20px'}>
            <Box><Text fontWeight={'bold'}>March 2021 - Dec 2021</Text></Box>
            <Box><Text fontWeight={'bold'}>Private Project</Text></Box>
          </Grid>
          <Box pl={'20px'}>
            <Box><Text>Ecommerce Shop Management System</Text></Box>
            <Box pl={'10px'}>
              <Box><Text>- Authentication and authorization</Text></Box>
              <Box><Text>- Products, orders, and users management</Text></Box>
              <Box><Text>- Online payment via Stripe</Text></Box>
              <Box><Text>- Live-chat</Text></Box>
              <Box><Text>- Multi language</Text></Box>
            </Box>
          </Box>

          {/*Bachelor*/}
          <Grid templateColumns={'1fr 1fr 1fr'} pt={'20px'}>
            <Box><Text fontWeight={'bold'}>Oct 2020 - Feb 2021</Text></Box>
            <Box><Text fontWeight={'bold'}>Bachelor Thesis</Text></Box>
            <Box><Text fontWeight={'bold'}>RWTH Aachen, Germany</Text></Box>
          </Grid>
          <Box pl={'20px'}>
            <Box><Text>Develop Web-based Game</Text></Box>
            <Box pl={'10px'}>
              <Box><Text>- Authentication and Authorization with OAuth 2.0 (Keycloak)</Text></Box>
              <Box><Text>- Frontend developed with ReactJs</Text></Box>
              <Box><Text>- Backend developed with ExpressJs and MongoDB</Text></Box>
              <Box><Text>- Containerized and deployed with Docker and NginX</Text></Box>
            </Box>
          </Box>
        </Box>

        {/*Social activities*/}
        <Divider w={'100%'} orientation={'horizontal'} borderColor={'gray.400'} />
        <Box mt={'10px'} mb={'10px'}>
          <Box color={'blue.500'}>
            <Text fontSize={'lg'}>SOCIAL ACTIVITIES</Text>
          </Box>
          <Grid templateColumns={'2fr 3fr 2fr'}>
            <Box>
              <Text>Dec 2017 - Oct 2022</Text>
            </Box>
            <Box>
              <Text>Vietnamese Student Association in Aachen</Text>
            </Box>
            <Box>
              <Text>Aachen, Germany</Text>
            </Box>
          </Grid>
          <Grid templateColumns={'2fr 3fr 2fr'}>
            <Box>
              <Text>Dec 2015 - Feb 2016</Text>
            </Box>
            <Box>
              <Text>VSEED Vietnam</Text>
            </Box>
            <Box>
              <Text>Hanoi, Vietnam</Text>
            </Box>
          </Grid>
          <Grid templateColumns={'2fr 3fr 2fr'}>
            <Box>
              <Text>Jun 2015 - Aug 2015</Text>
            </Box>
            <Box>
              <Text>Volunteer at Vietnam Museum of Ethnology</Text>
            </Box>
            <Box>
              <Text>Hanoi, Vietnam</Text>
            </Box>
          </Grid>
          <Grid templateColumns={'2fr 3fr 2fr'}>
            <Box>
              <Text>June 2009 - Dec 2014</Text>
            </Box>
            <Box>
              <Text>Hanoi Amateur Astronomy Club</Text>
            </Box>
            <Box>
              <Text>Hanoi, Vietnam</Text>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Center>
  );
};

export default App;