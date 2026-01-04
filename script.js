// Full fallback CV data (used if CV.json cannot be fetched)
const fallbackCV = { /* shortened? no include full from CV.json */ 
  "source": {
    "linkedin_url": "https://www.linkedin.com/in/ebrahim-ramadan/",
    "cv_pdf": "Ebrahim Ramadan CV (uploaded PDF)"
  },
  "basics": {
    "name": "Ibrahim (Ebrahim Ramadan) Timor",
    "label": "AWS & Kubernetes Cloud Architect | DevOps Engineer | EKS • Terraform • GitLab CI/CD • Crossplane • CAST AI • FinOps | Certified CKA • CKAD • KCNA • SAA | Scalable Cloud & Automation Specialist",
    "location": { "city": "Riga", "country": "Latvia" },
    "contact": {
      "address": "unijas iela 24, Vidzeme Suburb, Riga, Riga, LV-1001, Latvia",
      "email": "huma20050002hti28@gmail.com",
      "phone": "+371 25 422 754"
    }
  },
  "links": [
    { "type": "linkedin", "label": "LinkedIn", "url": "https://www.linkedin.com/in/ebrahim-ramadan/" },
    { "type": "portfolio", "label": "Portfolio (Gamma)", "url": "https://cloud-architect-kubernet-7tpqqph.gamma.site/" }
  ],
  "summary": [
    "AWS Solutions Architect and DevOps Leader based in Riga, Latvia focused on secure, scalable, cost-efficient cloud architectures for EU & EMEA.",
    "Builds production cloud platforms using AWS, Kubernetes (EKS), Terraform, GitLab CI/CD, GitOps, Crossplane, and DevSecOps."
  ],
  "specialties": [
    "Highly available and cost-optimized AWS architectures",
    "EKS cluster design, EC2 Auto Scaling, Fargate, Lambda serverless workloads",
    "Multi-account VPC architectures, Transit Gateway networking, Route53, CloudFront, WAF/Shield",
    "Security-first AWS design: IAM governance, KMS, Secrets Manager, GuardDuty, Config",
    "Data layer: S3 lifecycle design, RDS/Aurora optimization, DynamoDB patterns, ElastiCache, backup and DR",
    "GitOps delivery with GitLab, ArgoCD, Helm, Terraform, Crossplane",
    "Observability and governance with CloudWatch, CloudTrail, AWS Config, X-Ray, OpenSearch, Prometheus, Grafana",
    "Platform engineering leadership across migrations and modernization",
    "FinOps: reduce cloud spend and optimize compute and storage",
    "Reusable IaC modules, platform standards, automated delivery pipelines"
  ],
  "top_skills_linkedin": ["Amazon Web Services (AWS)", "Kubernetes", "DevOps", "Cloud Architecture", "Terraform"],
  "skills_cv": {
    "cloud": ["AWS", "Azure", "Alibaba Cloud", "CenturyLink", "Jelastic Cloud"],
    "containers": ["Docker", "Kubernetes", "Istio"],
    "observability": ["Dynatrace", "ManageEngine Applications Manager", "Splunk", "Graylog", "Grafana", "Prometheus"],
    "devops_tools": ["Jenkins", "Terraform", "Ansible", "Chef", "Vagrant", "Artifactory", "Fastlane"],
    "databases": ["Oracle Database (11g/12c)", "Microsoft SQL Server (2005/2008/2012)", "MySQL", "MongoDB"],
    "virtualization": ["VMware ESXi", "VMware Workstation", "VMware vCenter 5.5", "Hyper-V (2008/2012)", "Oracle VM VirtualBox"],
    "app_servers": ["Oracle WebLogic (11g/12c)", "Oracle HTTP Server 12c", "Apache HTTP Server", "GlassFish (3/4)", "JBoss", "IIS", "Nginx", "Tomcat", "Vert.x", "LAMP", "WAMP"],
    "operating_systems": ["Oracle Linux (6.5/7)", "Oracle Solaris 11", "Ubuntu (14/16/18)", "macOS", "Windows Server (2003/2008/2012)"],
    "directory_services": ["Apache LDAP", "Microsoft Active Directory (AD)"],
    "portals": ["Liferay"],
    "bpm_rules": ["jBPM", "Drools", "Oracle SOA Suite 11g/12c"],
    "collaboration_vcs": ["JIRA", "Bitbucket", "Git", "Confluence", "Mercurial", "SVN", "Gliffy", "GitHub", "GitLab"],
    "development": ["Linux Shell Scripting", "C#", "SQL", "PowerBuilder", "Java SE", "PHP", "JavaScript", "Python", "ASP.NET"],
    "testing_tools": ["IBM Rational Robot", "Postman", "Newman", "JMeter", "Selenium"],
    "management": ["Agile management", "System team management", "PHP development team management (part-time)"],
    "business": ["Human Resource Management", "Business Process & Workflow Management", "Archiving & Content Management", "Offers & Marketing"]
  },
  "certifications": [
    "AWS Certified Solutions Architect – Associate (SAA)",
    "Certified Kubernetes Administrator (CKA)",
    "Certified Kubernetes Application Developer (CKAD)",
    "Kubernetes and Cloud Native Associate (KCNA)",
    "Certified SAFe Practitioner",
    "CCNA",
    "CAST AI: Workload Optimization (Issued Aug 2025)",
    "CAST AI: Container Live Migration (Issued Nov 2025)"
  ],
  "languages": [
    { "name": "Arabic", "level": "Native or bilingual proficiency" },
    { "name": "English", "level": "Full professional proficiency" }
  ],
  "interests": ["Traveling", "Cycling", "Movies", "PS games", "Diving", "Snorkeling"],
  "experience": [
    { "company": "Accenture Baltics", "roles": [
      { "title": "Associate Manager & Cloud Architect", "start": "Jun 2022", "end": "Present", "location": "Riga, Latvia" },
      { "title": "Cloud Architect", "start": "Feb 2021", "end": "Jun 2022", "location": "Baltics" }
    ]},
    { "company": "C.T.Co", "roles": [
      { "title": "Senior DevOps Engineer / Solution Architect", "start": "Aug 2020", "end": "Feb 2021", "location": "Latvia" }
    ]},
    { "company": "Accenture", "roles": [
      { "title": "DevOps Team Leader", "start": "Sep 2017", "end": "Aug 2020", "location": "Riga, Latvia",
        "projects": [
          { "client": "Swisscom", "summary": "Migration of Elastic Path from VMs to containers on Kubernetes; service mesh and security tooling; observability stack.",
            "tech": ["Kubernetes", "Istio", "Jenkins", "Docker", "Artifactory", "Aqua Security", "Kiali", "Grafana", "Prometheus", "JFrog Xray", "Apache Solr", "ActiveMQ"],
            "methods": ["CI/CD", "Scrum", "Agile", "Service Mesh", "DevSecOps"] },
          { "client": "Roche", "summary": "Designed and built a full DevOps stack for big data, web, and mobile projects; automation and workflow improvements.",
            "tech": ["DC/OS Mesosphere", "Linkerd", "Terraform", "AWS", "Jenkins", "Artifactory", "Vert.x", "Spark", "Kafka", "Cassandra", "Java", "Zeppelin"],
            "methods": ["CI/CD", "Scrum", "Agile", "Cloud-agnostic"] }
        ]
      }
    ]},
    { "company": "Dematic / Advansys ESC", "roles": [
      { "title": "Senior DevOps Engineer", "start": "Nov 2016", "end": "Sep 2017", "summary": "SME for DevOps tools; troubleshooting across toolchain; supported pipelines; monitoring reliability; dashboards and reporting." }
    ]},
    { "company": "TRUEMEGA Technology Solutions (Vodafone)", "roles": [
      { "title": "Software Team Leader / Solutions Architect", "summary": "Led teams; handled customer requests; troubleshooting; proposals; PoCs and technical demos." }
    ]},
    { "company": "United OFOQ", "roles": [
      { "title": "Systems Engineering Team Leader", "summary": "Managed administrators; monitored infrastructure; OS/app tooling; security/backup; scripts/automation; 2nd/3rd level support." }
    ]},
    { "company": "PocketSolutions", "roles": [
      { "title": "Mobile Developer and Architect (Part-Time)", "summary": "Cross-platform mobile apps; responsive web apps; mobile back-end integration; DB integrations; SOAP/REST and BPM integration." }
    ]},
    { "company": "Agorateam", "roles": [
      { "title": "Developer", "summary": "Mobile back-end web services; admin web app development." }
    ]}
  ],
  "education": [
    { "institution": "Higher Technological Institute", "degree": "B.Sc. Electrical Engineering and Computer Engineering",
      "start": "2005", "end": "2010", "grade": "Good",
      "project": "Design and analysis of linear integrated Dipole Microstrip Patch antenna array around 8 GHZ (Excellent)" }
  ],
  "recommendations_received": [
    { "from": "Jose Antonio Coarasa Perez", "role_context": "Managed you directly (Apr 30, 2025)",
      "highlights": [
        "Founder team member; key contributions building curated AWS platform",
        "Built service catalog and Crossplane automations enabling migrations",
        "Led CAST AI integration across hundreds of EKS clusters",
        "Led complex application transformations to GitOps pattern; added observability",
        "Strengths: transparency, perseverance, collaboration; led complex projects successfully"
      ]},
    { "from": "Rino Guglietta", "role_context": "Managed you directly (Apr 8, 2025)",
      "highlights": [
        "DevOps + Kubernetes knowledge supporting on-prem to AWS modernization",
        "Exploring GenAI approaches to simplify migration/modernization work",
        "Strong collaborator"
      ]}
  ],
  "content_highlights": [
    { "type": "post", "topic": "Reducing/eliminating iCloud storage cost; backup strategy limitations for iPhone/NAS",
      "tags": ["#iCloud", "#DataOwnership", "#CloudStorage", "#BackupStrategy", "#TechDiscussion"] },
    { "type": "post", "topic": "GreenOps for EKS; carbon-aware scheduling + pipeline CO2 observability + GitOps enforcement + FinOps/GreenOps loop with CAST AI spot usage",
      "tags": ["#GreenOps", "#CloudSustainability", "#PlatformEngineering", "#Kubernetes", "#FinOps", "#EKS", "#DevOps"] }
  ]
};

async function fetchJSONWithFallback() {
  try {
    const res = await fetch("CV.json", { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn("Using embedded CV data. Fetch failed:", err);
    return fallbackCV;
  }
}

async function fetchLinkedInSnippet() {
  try {
    const res = await fetch("linkedin.text", { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean).slice(0, 15);
    return lines.join("\n") || "LinkedIn highlights not available yet.";
  } catch (err) {
    console.warn("LinkedIn highlights unavailable:", err);
    return "LinkedIn highlights unavailable.";
  }
}

function renderHero(data) {
  const basics = data.basics || {};
  const loc = basics.location || {};
  const contact = basics.contact || {};

  const name = basics.name || "Cloud Architect";
  document.getElementById("hero-name").textContent = name;
  const brand = document.getElementById("brand-name");
  if (brand) brand.textContent = name;
  document.getElementById("hero-title").textContent =
    basics.label || "Designing reliable, secure, and scalable platforms.";
  document.getElementById("hero-location").textContent = [loc.city, loc.country].filter(Boolean).join(", ");
  document.getElementById("hero-contact").textContent =
    [contact.email, contact.phone].filter(Boolean).join(" · ");

  const linkedin = data.links?.find((l) => (l.type || "").toLowerCase() === "linkedin") || data.source;
  const link = document.getElementById("linkedin-link");
  if (linkedin?.linkedin_url || linkedin?.url) {
    link.href = linkedin.linkedin_url || linkedin.url;
    link.textContent = linkedin.label || "LinkedIn";
  } else {
    link.href = "#";
    link.textContent = "LinkedIn (unavailable)";
  }

  const list = document.getElementById("hero-specialties");
  list.innerHTML = "";
  (data.specialties || []).slice(0, 6).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function renderSummary(data) {
  const target = document.getElementById("summary-text");
  const lines = data.summary || [];
  target.textContent = lines.length ? lines.join(" ") : "Cloud Architect & DevOps engineer specializing in AWS, Kubernetes, and automation.";
}

function pill(text) {
  const el = document.createElement("span");
  el.className = "pill";
  el.textContent = text;
  return el;
}

function renderSkills(data) {
  const container = document.getElementById("skills-content");
  container.innerHTML = "";
  const topSkills = data.top_skills_linkedin || [];
  if (topSkills.length) {
    const block = document.createElement("div");
    block.className = "tile";
    block.innerHTML = "<h3>Top Skills</h3>";
    const row = document.createElement("div");
    row.className = "pill-row";
    topSkills.forEach((s) => row.appendChild(pill(s)));
    block.appendChild(row);
    container.appendChild(block);
  }
  const categories = data.skills_cv || {};
  Object.entries(categories).forEach(([name, items]) => {
    const block = document.createElement("div");
    block.className = "tile";
    const h3 = document.createElement("h3");
    h3.textContent = name.replace(/_/g, " ");
    block.appendChild(h3);
    const row = document.createElement("div");
    row.className = "pill-row";
    (items || []).forEach((i) => row.appendChild(pill(i)));
    block.appendChild(row);
    container.appendChild(block);
  });
}

function renderExperience(data) {
  const container = document.getElementById("experience-cards");
  container.innerHTML = "";
  const list = data.experience || [];
  if (!list.length) {
    container.innerHTML = "<p class='muted'>Experience coming soon.</p>";
    return;
  }
  list.forEach((exp) => {
    const card = document.createElement("div");
    card.className = "card";
    const title = document.createElement("h3");
    title.textContent = exp.company || "Company";
    card.appendChild(title);
    (exp.roles || []).forEach((role) => {
      const roleTitle = document.createElement("p");
      roleTitle.innerHTML = `<strong>${role.title || "Role"}</strong> · ${role.start || ""} – ${role.end || "Present"}`;
      card.appendChild(roleTitle);
      if (role.location) {
        const loc = document.createElement("p");
        loc.className = "muted";
        loc.textContent = role.location;
        card.appendChild(loc);
      }
      if (role.summary) {
        const s = document.createElement("p");
        s.textContent = role.summary;
        card.appendChild(s);
      }
      if (Array.isArray(role.projects)) {
        const ul = document.createElement("ul");
        ul.className = "list";
        role.projects.slice(0, 2).forEach((proj) => {
          const li = document.createElement("li");
          li.textContent = proj.summary || proj.client || "Project";
          ul.appendChild(li);
        });
        card.appendChild(ul);
      }
    });
    container.appendChild(card);
  });
}

function renderCerts(data) {
  const list = document.getElementById("cert-list");
  list.innerHTML = "";
  const certs = data.certifications || [];
  if (!certs.length) {
    list.innerHTML = "<li class='muted'>No certifications listed.</li>";
    return;
  }
  certs.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = c;
    list.appendChild(li);
  });
}

function renderEducation(data) {
  const list = document.getElementById("edu-list");
  list.innerHTML = "";
  const items = data.education || [];
  if (!items.length) {
    list.innerHTML = "<li class='muted'>Education not provided.</li>";
    return;
  }
  items.forEach((e) => {
    const li = document.createElement("li");
    const range = [e.start, e.end].filter(Boolean).join(" – ");
    li.innerHTML = `<strong>${e.institution || "Institution"}</strong> · ${e.degree || ""}${range ? " · " + range : ""}`;
    list.appendChild(li);
  });
}

function renderContact(data) {
  const target = document.getElementById("contact-details");
  target.innerHTML = "";
  const contact = data.basics?.contact || {};
  const entries = [];
  if (contact.email) entries.push(`<a class="inline-link" href="mailto:${contact.email}">${contact.email}</a>`);
  if (contact.phone) entries.push(`<a class="inline-link" href="tel:${contact.phone.replace(/\s+/g, "")}">${contact.phone}</a>`);
  if (contact.address) entries.push(contact.address);
  target.innerHTML = entries.length ? entries.join(" · ") : "<span class='muted'>Reach out via LinkedIn.</span>";
}

function renderLinks(data) {
  const list = document.getElementById("link-list");
  list.innerHTML = "";
  const links = data.links || [];
  if (!links.length) {
    list.innerHTML = "<li class='muted'>No links provided.</li>";
    return;
  }
  links.forEach((link) => {
    if (!link.url) return;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = link.label || link.url;
    a.className = "inline-link";
    li.appendChild(a);
    list.appendChild(li);
  });
}

function renderLanguages(data) {
  const list = document.getElementById("lang-list");
  list.innerHTML = "";
  const langs = data.languages || [];
  if (!langs.length) {
    list.innerHTML = "<li class='muted'>Languages not listed.</li>";
    return;
  }
  langs.forEach((lang) => {
    const li = document.createElement("li");
    li.textContent = [lang.name, lang.level].filter(Boolean).join(" · ");
    list.appendChild(li);
  });
}

function renderInterests(data) {
  const list = document.getElementById("interest-list");
  list.innerHTML = "";
  const interests = data.interests || [];
  if (!interests.length) {
    list.innerHTML = "<li class='muted'>Interests not listed.</li>";
    return;
  }
  interests.forEach((interest) => {
    const li = document.createElement("li");
    li.textContent = interest;
    list.appendChild(li);
  });
}

function renderRecommendations(data) {
  const container = document.getElementById("rec-cards");
  container.innerHTML = "";
  const recs = data.recommendations_received || [];
  if (!recs.length) {
    container.innerHTML = "<p class='muted'>Recommendations will appear here.</p>";
    return;
  }
  recs.forEach((rec) => {
    const card = document.createElement("div");
    card.className = "card";
    const title = document.createElement("h3");
    title.textContent = rec.from || "Recommendation";
    card.appendChild(title);
    if (rec.role_context) {
      const ctx = document.createElement("p");
      ctx.className = "muted";
      ctx.textContent = rec.role_context;
      card.appendChild(ctx);
    }
    if (Array.isArray(rec.highlights)) {
      const ul = document.createElement("ul");
      ul.className = "list";
      rec.highlights.slice(0, 4).forEach((h) => {
        const li = document.createElement("li");
        li.textContent = h;
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }
    container.appendChild(card);
  });
}

function renderContentHighlights(data) {
  const list = document.getElementById("content-list");
  list.innerHTML = "";
  const items = data.content_highlights || [];
  if (!items.length) {
    list.innerHTML = "<li class='muted'>Content highlights will appear here.</li>";
    return;
  }
  items.forEach((item) => {
    const li = document.createElement("li");
    const title = document.createElement("strong");
    title.textContent = item.topic || "Highlight";
    li.appendChild(title);
    if (item.type) {
      const type = document.createElement("span");
      type.className = "muted";
      type.style.marginLeft = "8px";
      type.textContent = item.type;
      li.appendChild(type);
    }
    if (Array.isArray(item.tags)) {
      const row = document.createElement("div");
      row.className = "pill-row";
      item.tags.slice(0, 6).forEach((tag) => row.appendChild(pill(tag)));
      li.appendChild(row);
    }
    list.appendChild(li);
  });
}

async function init() {
  // Avoid https on localhost/file issues by using embedded data; we still try live fetch first.
  const data = await fetchJSONWithFallback();
  const linkedin = await fetchLinkedInSnippet();

  renderHero(data);
  renderSummary(data);
  renderSkills(data);
  renderExperience(data);
  renderCerts(data);
  renderEducation(data);
  renderContact(data);
  renderLinks(data);
  renderLanguages(data);
  renderInterests(data);
  renderRecommendations(data);
  renderContentHighlights(data);
  document.getElementById("linkedin-text").textContent = linkedin;
}

document.addEventListener("DOMContentLoaded", init);
