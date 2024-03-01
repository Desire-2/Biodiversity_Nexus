import Head from 'next/head';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Image from 'next/image'; // Import Image from next/image
import styles from '../styles/about.module.css'; // Import CSS module for styling

const OrganizationalStructure = () => {
  // Sample data for departmental roles and member profiles
  const departments = [
    {
      name: 'Executive Committee',
      roles: [
        {
          name: 'Coordinator',
          members: [
            {
              name: 'Desire Bikorimana',
              email: 'bikorimanadesire@yahoo.com',
              phone: '+250780784924',
              image: '/Photos/3.jpg'
            }
          ]
        },
        {
          name: 'Vice Coordinator',
          members: [
            {
              name: 'Jean Damour Irakoze',
              email: 'jdamourirakoze@gmail.com',
              phone: '+250786934546',
              image: '/Photos/3.jpg'
            }
          ]
        },
        {
          name: 'Secretary',
          members: [
            {
              name: 'Liliane Uwizeyimana  ',
              email: 'uwizeyimanaliliane22@gmail.com',
              phone: '+250786700993',
              image: '/Photos/3.jpg'
            }
          ]
        },
        {
          name: 'Financial Manager',
          members: [
            {
              name: 'Clemence MUGISHA',
              email: 'mugishaclemence6@gmail.com',
              phone: '+250789982043',
              image: '/Photos/3.jpg'
            }
          ]
        },
        {
          name: 'Program Manager',
          members: [
            {
              name: 'Mwiseneza Uwe Theophile ',
              email: 'mwisenezauwet@gmail.com',
              phone: '+250787492740',
              image: '/Photos/3.jpg'
            }
          ]
        },
      ]
    },
    {
      name: 'Department Heads',
      roles: [
        {
          name: 'Communication Officer',
          members: [
            {
              name: 'Hemenegilde Undimwana',
              email: 'hermenegide3@gmail.com',
              phone: '+250781499864',
              image: '/Photos/3.jpg'
            }
          ]
        },
        {
          name: 'Administration Officer',
          members: [
            {
              name: 'Theoneste IRANKUNDA',
              email: 'bob@example.com',
              phone: '+250789428058',
              image: '/Photos/3.jpg'
            }
          ]
        },
        // Add more departmental roles and members as needed
      ]
    }
  ];
  return (
    <div>
      <Navigation />
      <div className={styles.container}>
        
        <Head>
          <title>Biodiversity Nexus Student Association - Organizational Structure</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Organizational Structure</h1>

          <div className={styles.structure}>
            {departments.map((department, index) => (
              <div key={index} className={styles.department}>
                <h2>{department.name}</h2>
                <ul>
                  {department.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className={styles.role}>
                      <h3>{role.name}</h3>
                      <ul>
                        {role.members.map((member, memberIndex) => (
                          <li key={memberIndex} className={styles.member}>
                            <Image src={member.image} alt={member.name} className={styles.image} width={100} height={100} />
                            <div>
                              <span className={styles.name}>{member.name}</span>
                              <span className={styles.contact}>
                                Email: <a href={`mailto:${member.email}`}>{member.email}</a>, 
                                Phone: {member.phone}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
        
      </div>
      <Footer />
    </div>
  );
};
export default OrganizationalStructure;