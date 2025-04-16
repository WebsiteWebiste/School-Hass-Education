function toggleInfo(section) {
  const infoDiv = document.getElementById(section);
  if (infoDiv.style.display === "none" || infoDiv.style.display === "") {
      infoDiv.style.display = "block";
  } else {
      infoDiv.style.display = "none";
  }

  // Populate the info content for each section dynamically
  if (section === 'team') {
      infoDiv.innerHTML = `
          <h3>Introduction of Our Teaching Team</h3>
          <p>At the heart of our HASS program is a passionate and diverse team of educators committed to delivering engaging and inclusive learning experiences:</p>
          <ul>
              <p><strong>Ms.ROSLINA TAMANG</strong> - Lead Teacher, Humanities and Social Sciences, with 10 years of experience in integrating Indigenous perspectives.</p>
                    <p><strong>Ms. PRASAUNA RAWAL </strong> - Early Years Specialist, focusing on inquiry-based learning and developing critical thinking in young learners.</p
          </ul>
          <p>Together, we bring expertise, cultural awareness, and a shared commitment to nurturing critical and compassionate learners.</p>
          <img src="team-photo.jpg" alt="Our Teaching Team" class="section-image">
      `;
  }
  
  if (section === 'hass') {
      infoDiv.innerHTML = `
          <h3>Introduction to Humanities and Social Sciences (HASS)</h3>
          <p>HASS in the primary school context refers to the integrated study of History, Geography, Civics and Citizenship, and Economics and Business. It supports students in understanding their world—past, present, and future—and empowers them to become informed, responsible citizens. HASS fosters a sense of curiosity, identity, and a connection to the wider world.</p>
          <img src="hass-intro.jpg" alt="HASS Introduction" class="section-image">
      `;
  }
  
  if (section === 'rationale') {
      infoDiv.innerHTML = `
          <h3>Rationale: Why We Teach Humanities</h3>
          <p>Teaching HASS is essential to develop informed, active citizens who understand the complexity of societal systems and human experiences. Our rationale aligns with the Australian Curriculum sub-strands:</p>
          <ul>
              <li><strong>History</strong> teaches chronological thinking and historical empathy.</li>
              <li><strong>Geography</strong> develops spatial awareness and environmental responsibility.</li>
              <li><strong>Civics and Citizenship</strong> encourages democratic values and community participation.</li>
              <li><strong>Economics and Business</strong> builds financial literacy and decision-making skills.</li>
          </ul>
          <p>Learning objectives include:</p>
          <ul>
              <li>Understanding societal structures and cultural diversity.</li>
              <li>Developing ethical reasoning and empathy.</li>
              <li>Encouraging inquiry and evidence-based thinking.</li>
          </ul>
          <img src="why-teach-hass.jpg" alt="Why Teach HASS" class="section-image">
      `;
  }
  
  if (section === 'skills') {
      infoDiv.innerHTML = `
          <h3>Qualities and Skills That HASS Provides</h3>
          <p>HASS fosters a broad spectrum of lifelong skills:</p>
          <ul>
              <li><strong>Critical Thinking</strong> – Evaluating sources, analyzing perspectives, and drawing reasoned conclusions.</li>
              <li><strong>Problem Solving</strong> – Addressing real-world social and environmental issues.</li>
              <li><strong>Empathy and Compassion</strong> – Understanding diverse communities and historical experiences.</li>
              <li><strong>Communication</strong> – Articulating ideas through discussion, writing, and presentations.</li>
              <li><strong>Cultural Competency</strong> – Recognising and respecting cultural diversity.</li>
          </ul>
          <img src="hass-skills.jpg" alt="Skills in HASS" class="section-image">
      `;
  }
  
  if (section === '3rs') {
      infoDiv.innerHTML = `
          <h3>Our Whole School Approach to the 3Rs (Respect, Relationships, Reconciliation) Project</h3>
          <p>Our school proudly implements the 3Rs Framework from rrr.edu.au, focusing on three core pillars:</p>
          <ul>
              <li><strong>Respect</strong> – Valuing Aboriginal and Torres Strait Islander perspectives.</li>
              <li><strong>Relationships</strong> – Building meaningful connections with local Indigenous communities.</li>
              <li><strong>Reconciliation</strong> – Promoting social justice and equity.</li>
          </ul>
          <p>Topics Covered:</p>
          <ul>
              <li>Understanding Country and Place</li>
              <li>Truth-telling through History</li>
              <li>Celebrating Culture and Identity</li>
          </ul>
          <p>Examples of Impact:</p>
          <ul>
              <li>Students co-created a Reconciliation Garden with Elders, integrating learning about native plants and local stories.</li>
              <li>Teachers report improved cultural understanding and student engagement during HASS units that incorporate First Nations perspectives.</li>
          </ul>
          <img src="3rs-project.jpg" alt="3Rs Project" class="section-image">
      `;
  }
  
  if (section === 'indigenous') {
      infoDiv.innerHTML = `
          <h3>Why We Include Indigenous Perspectives in Education</h3>
          <p>Our school is committed to reconciliation and embedding Indigenous knowledge and perspectives across all learning areas. This commitment supports:</p>
          <ul>
              <li><strong>Cross-curriculum Priority:</strong> Aboriginal and Torres Strait Islander Histories and Cultures.</li>
              <li><strong>AITSL Standard 1.4:</strong> Demonstrating knowledge and understanding of Aboriginal and Torres Strait Islander histories, cultures, and languages.</li>
              <li><strong>AITSL Standard 2.4:</strong> Respecting Indigenous peoples to promote reconciliation and equity.</li>
          </ul>
          <p>Integration Examples:</p>
          <ul>
              <li>History units on local Indigenous communities before and after colonisation.</li>
              <li>Collaboration with local Elders for storytelling and cultural lessons.</li>
              <li>Displaying and discussing Indigenous artworks and artefacts.</li>
          </ul>
          <img src="indigenous-education.jpg" alt="Indigenous Perspectives" class="section-image">
      `;
  }
  
  if (section === 'place') {
      infoDiv.innerHTML = `
          <h3>Place-Based Learning and Excursions in HASS</h3>
          <p>Pedagogical Value: Place-based learning anchors student understanding in their immediate environment, fostering deeper connections to local culture, geography, and history.</p>
          <p>Key Resources:</p>
          <ul>
              <li><strong>Bunjilaka Aboriginal Cultural Centre</strong>: Students explore artefacts like traditional tools, ceremonial objects, and language maps to understand Aboriginal perspectives.</li>
              <li><strong>Local Excursions</strong>: Visits to cultural landmarks, environmental sites, and heritage buildings enhance relevance and engagement.</li>
          </ul>
          <p>Sample Activities:</p>
          <ul>
              <li>Mapping local Indigenous language groups.</li>
              <li>Investigating land use through a local river study.</li>
              <li>Reflecting on artefacts from Bunjilaka to write personal reconciliation pledges.</li>
          </ul>
          <img src="place-based-learning.jpg" alt="Place-Based Learning" class="section-image">
      `;
  }
  
  if (section === 'celebrate') {
      infoDiv.innerHTML = `
          <h3>Whole School Activities Linked to Significant National Dates</h3>
          <p>We embed national commemorations within our curriculum to enhance civic understanding:</p>
          <ul>
              <li><strong>NAIDOC Week</strong> – Cross-curricular projects celebrating Aboriginal achievements.</li>
              <li><strong>Reconciliation Week</strong> – Whole-school assemblies with student-led presentations.</li>
              <li><strong>Harmony Day</strong> – Classroom discussions and shared cultural experiences.</li>
              <li><strong>ANZAC Day and Remembrance Day</strong> – Historical inquiry and ceremonies.</li>
          </ul>
          <img src="national-celebrations.jpg" alt="National Celebrations" class="section-image">
      `;
  }




  if (section === 'celebration') {
    infoDiv.innerHTML = `
        <h3>Celebrating Student Success</h3>
        <p>We celebrate student achievements through various initiatives:</p>
        <ul>
                            <li>Weekly recognition assemblies</li>
                            <li>Student work exhibitions</li>
                            <li>Digital portfolios showcasing progress</li>
                            <li>Special achievement certificates</li>
                            <li>Parent-teacher showcase events</li>
                            <li>Community presentation days</li>
                        </ul>
    `;
  }
  if (section === 'assessment') {
    infoDiv.innerHTML = `
        <h3>Assessment for Learning</h3>
        <p>We use a range of assessment methods to support student learning:</p>
        <ul>
                            <li>Formative assessments during lessons</li>
                            <li>Regular feedback sessions</li>
                            <li>Learning progress tracking</li>
                        </ul>
                        
                        <h4>Assessment as Learning</h4>
                        <ul>
                            <li>Student self-reflection journals</li>
                            <li>Peer assessment activities</li>
                            <li>Learning portfolio development</li>
                        </ul>
                        
                        <h4>Assessment of Learning</h4>
                        <ul>
                            <li>End-of-unit projects</li>
                            <li>Standardized tests</li>
                            <li>Final presentations</li>
                        </ul>
    `;
  }

}
