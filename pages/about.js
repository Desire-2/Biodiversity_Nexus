// pages/OrganizationalStructure.js
import Head from 'next/head';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import styles from './styles/about.module.css'; // Import CSS module for styling

export default function OrganizationalStructure() {
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
              image: './../Photos/3.jpg'
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
              image: '/jane_smith.jpg'
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
              image: '/jane_smith.jpg'
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
              image: '/jane_smith.jpg'
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
              image: '/jane_smith.jpg'
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
              image: '/alice_johnson.jpg'
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
              image: '/bob_thompson.jpg'
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
                          <img src={member.image} alt={member.name} className={styles.image} />
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
}
