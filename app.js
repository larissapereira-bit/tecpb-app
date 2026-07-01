const titles = {
  inicio: "Início",
  calendario: "Calendário",
  itens: "Listas de itens",
  estudos: "Estudos",
  forum: "Fórum",
  perfis: "Perfis da corrente",
  perfil: "Meu perfil",
  admin: "Administração",
};

const profiles = [
  {
    id: "thiago",
    rank: 0,
    leader: "pai",
    marker: "♛",
    initials: "TH",
    name: "Thiago",
    role: "Pai de santo",
    permission: "Administrador",
    obligation: "Não se aplica",
    next: "Sem previsão",
    responsibility: "Condução espiritual da casa",
    notes: "Pai de santo. Acesso total aos perfis, avaliações, calendário e listas.",
    about: "Responsável espiritual pela casa.",
    headFather: "",
    headMother: "",
    photo: "",
  },
  {
    id: "jaqueline",
    rank: 0,
    leader: "mae",
    marker: "♕",
    initials: "JQ",
    name: "Jaqueline",
    role: "Mãe pequena e capitã",
    permission: "Administrador",
    obligation: "Não se aplica",
    next: "Sem previsão",
    responsibility: "Projeto Terreirinho",
    notes: "Mãe pequena e capitã. Acesso total aos perfis e apoio na coordenação.",
    about: "Apoio direto à condução espiritual e organização da corrente.",
    headFather: "",
    headMother: "",
    photo: "",
  },
  {
    id: "claudemir",
    rank: 1,
    leader: "",
    marker: "✦",
    initials: "CL",
    name: "Claudemir",
    role: "Pai Ogã",
    permission: "Coordenação",
    obligation: "Ogã",
    next: "Sem previsão",
    responsibility: "Obras, manutenção e limpeza",
    notes: "Pai Ogã. Perfil disponível para acompanhamento e registros internos.",
    about: "",
    headFather: "",
    headMother: "",
    photo: "",
  },
  {
    id: "rita",
    rank: 2,
    leader: "",
    marker: "✦",
    initials: "RT",
    name: "Rita",
    role: "Médium",
    responsibility: "",
    permission: "Médium",
    obligation: "Obrigação de faca",
    next: "Camarinha",
    responsibility: "Projeto Terreirinho",
    notes: "Médium com obrigação de faca.",
    about: "",
    headFather: "",
    headMother: "",
    photo: "",
  },
  {
    id: "marcela",
    rank: 3,
    leader: "",
    marker: "✦",
    initials: "MC",
    name: "Marcela",
    role: "Médium",
    permission: "Médium",
    obligation: "Obrigação de fogo",
    next: "Obrigação de faca",
    responsibility: "Organização das obrigações",
    notes: "Médium com obrigação de fogo.",
    about: "",
    headFather: "",
    headMother: "",
    photo: "",
  },
  {
    id: "priscila",
    rank: 4,
    leader: "",
    marker: "✦",
    initials: "PR",
    name: "Priscila",
    role: "Médium de Orixalá",
    permission: "Médium",
    obligation: "Orixalá",
    next: "Obrigação de fogo",
    responsibility: "Estoque e controle de itens",
    notes: "Médium de Orixalá.",
    about: "",
    headFather: "",
    headMother: "",
    photo: "",
  },
  {
    id: "monique",
    rank: 5,
    leader: "",
    marker: "✦",
    initials: "MO",
    name: "Monique",
    role: "Médium de Orixalá",
    permission: "Médium",
    obligation: "Orixalá",
    next: "Obrigação de fogo",
    responsibility: "Calendário geral",
    notes: "Médium de Orixalá.",
    about: "",
    headFather: "",
    headMother: "",
    photo: "",
  },
  {
    id: "kelly",
    rank: 6,
    leader: "",
    marker: "✦",
    initials: "KL",
    name: "Kelly",
    role: "Médium",
    permission: "Médium",
    obligation: "Obrigação de cabeça",
    next: "Orixalá",
    responsibility: "Obras, manutenção e limpeza",
    notes: "Médium com obrigação de cabeça.",
    about: "",
    headFather: "",
    headMother: "",
    photo: "",
  },
  {
    id: "vanessa",
    rank: 7,
    leader: "",
    marker: "✦",
    initials: "VN",
    name: "Vanessa",
    role: "Médium",
    permission: "Médium",
    obligation: "Obrigação de cabeça",
    next: "Orixalá",
    responsibility: "Estoque e controle de itens",
    notes: "Médium com obrigação de cabeça.",
    about: "",
    headFather: "",
    headMother: "",
    photo: "",
  },
  {
    id: "flavia",
    rank: 8,
    leader: "",
    marker: "✦",
    initials: "FL",
    name: "Flávia",
    role: "Médium",
    permission: "Médium",
    obligation: "Obrigação de cabeça",
    next: "Orixalá",
    responsibility: "A definir",
    notes: "Médium cadastrada na hierarquia da corrente.",
    about: "",
    headFather: "",
    headMother: "",
    photo: "",
  },
  {
    id: "larissa",
    rank: 9,
    leader: "",
    marker: "✦",
    initials: "LS",
    name: "Larissa",
    role: "Médium",
    permission: "Administrador",
    obligation: "Obrigação de cabeça",
    next: "Orixalá",
    responsibility: "Consultas gerais do terreiro",
    notes: "Administradora responsável pela montagem do app. Acesso total aos perfis.",
    about: "Escreva um pouco sobre sua caminhada, suas firmezas e seu desenvolvimento.",
    headFather: "",
    headMother: "",
    photo: "",
  },
  {
    id: "luciana",
    rank: 10,
    leader: "",
    marker: "✦",
    initials: "LC",
    name: "Luciana",
    role: "Preparando obrigação de cabeça",
    permission: "Médium",
    obligation: "Mão de Pemba",
    next: "Obrigação de cabeça",
    responsibility: "Obras, manutenção e limpeza",
    notes: "Em preparação para obrigação de cabeça.",
    about: "",
    headFather: "",
    headMother: "",
    photo: "",
  },
];

const defaultEvents = [
  {
    id: "evento-1",
    title: "Gira de desenvolvimento",
    type: "Gira",
    date: "2026-07-05",
    time: "19:30",
    place: "Terreiro",
    description: "Gira voltada ao desenvolvimento mediúnico, com abertura da casa, firmeza, atendimento e limpeza do espaço ao final.",
    responses: { larissa: "Vou" },
  },
  {
    id: "evento-2",
    title: "Estudo e preparação",
    type: "Estudo",
    date: "2026-07-08",
    time: "20:00",
    place: "Sala de estudos",
    description: "Encontro de estudo e preparo para a corrente.",
    responses: {},
  },
];

const defaultSupplyLists = [
  {
    id: "lista-1",
    title: "Lista da gira de 05 jul",
    eventId: "evento-1",
    items: [
      { id: "item-1", name: "Arruda fresca", assignedTo: "larissa", delivered: false },
      { id: "item-2", name: "Pacote de arroz", assignedTo: "larissa", delivered: true },
      { id: "item-3", name: "Velas brancas", assignedTo: "", delivered: false },
      { id: "item-4", name: "Material de limpeza", assignedTo: "", delivered: false },
    ],
  },
];

const defaultStudies = [
  {
    id: "estudo-1",
    title: "Fundamentos da corrente",
    type: "Estudo",
    dueDate: "",
    description: "Material de leitura para preparação dos próximos encontros.",
    fileName: "fundamentos-da-corrente.pdf",
    completed: false,
    response: "",
  },
  {
    id: "entrega-1",
    title: "Resumo do estudo de firmeza",
    type: "Entrega",
    dueDate: "2026-07-08",
    description: "Entregar um resumo com dúvidas e pontos principais do estudo.",
    fileName: "orientacao-entrega.pdf",
    completed: false,
    response: "",
  },
];

const defaultFeedbacks = [
  {
    id: "feedback-1",
    toId: "larissa",
    message: "Boa evolução na postura durante a gira e cuidado com a corrente.",
    createdAt: "2026-07-01",
  },
];

const defaultForumTopics = [
  {
    id: "forum-1",
    title: "Dúvidas sobre preparação para a gira",
    message: "Espaço para colocar dúvidas sobre roupa, horário, firmeza e materiais necessários.",
    author: "Anônimo",
    createdAt: "2026-07-01",
    replies: [
      {
        id: "reply-1",
        message: "Podemos reunir as orientações principais aqui para todo mundo consultar antes da gira.",
        author: "Administração",
        createdAt: "2026-07-01",
      },
    ],
  },
];

const storageKey = "tecpbProfiles";
const eventsStorageKey = "tecpbEvents";
const supplyStorageKey = "tecpbSupplyLists";
const studiesStorageKey = "tecpbStudies";
const feedbackStorageKey = "tecpbFeedbacks";
const forumStorageKey = "tecpbForumTopics";
const remoteUploadStorageKey = "tecpbLastRemoteUploadAt";
const removedObligation = ["Mesa", "de", "iniciação"].join(" ");

const hierarchyOverrides = {
  thiago: {
    rank: 0,
    leader: "pai",
    marker: "♛",
    initials: "TH",
    name: "Thiago",
    role: "Pai de santo",
    permission: "Administrador",
    obligation: "Não se aplica",
    next: "Sem previsão",
  },
  jaqueline: {
    rank: 0,
    leader: "mae",
    marker: "♕",
    initials: "JQ",
    name: "Jaqueline",
    obligation: "Não se aplica",
    next: "Sem previsão",
  },
  claudemir: { rank: 1, leader: "" },
  rita: { rank: 2, leader: "" },
  marcela: { rank: 3, leader: "" },
  priscila: { rank: 4, leader: "" },
  monique: { rank: 5, leader: "" },
  kelly: { rank: 6, leader: "" },
  vanessa: { rank: 7, leader: "" },
  flavia: { rank: 8, leader: "" },
  larissa: { rank: 9, leader: "", role: "Médium", permission: "Administrador" },
  luciana: { rank: 10, leader: "", name: "Luciana" },
};

const savedProfiles = loadSavedProfiles();
if (savedProfiles) {
  profiles.splice(0, profiles.length, ...mergeSavedProfiles(profiles, savedProfiles));
  persistProfiles();
}

const savedEvents = loadSavedEvents();
const savedSupplyLists = loadSavedSupplyLists();
const savedStudies = loadSavedStudies();
const savedFeedbacks = loadSavedFeedbacks();
const savedForumTopics = loadSavedForumTopics();
const events = savedEvents?.length ? savedEvents : [...defaultEvents];
const supplyLists = savedSupplyLists?.length ? savedSupplyLists : [...defaultSupplyLists];
const studies = savedStudies?.length ? savedStudies : [...defaultStudies];
const feedbacks = normalizeFeedbacks(savedFeedbacks?.length ? savedFeedbacks : defaultFeedbacks);
const forumTopics = savedForumTopics?.length ? savedForumTopics : [...defaultForumTopics];

const navButtons = document.querySelectorAll("[data-screen]");
const screens = document.querySelectorAll(".screen");
const pageTitle = document.querySelector("#page-title");
const hierarchyList = document.querySelector("#hierarchy-list");
const profileCount = document.querySelector("#profile-count");
const adminCount = document.querySelector("#admin-count");
const adminNames = document.querySelector("#admin-names");
const adminPermissionList = document.querySelector("#admin-permission-list");
const saveStatus = document.querySelector("#profile-save-status");
const syncStatus = document.querySelector("#sync-status");
const photoInput = document.querySelector("#profile-photo-input");
const photoPreview = document.querySelector("#profile-photo-preview");
const calendarYear = document.querySelector("#calendar-year");
const calendarYearLabel = document.querySelector("#calendar-year-label");
const eventList = document.querySelector("#event-list");
const eventCount = document.querySelector("#event-count");
const eventDetailTitle = document.querySelector("#event-detail-title");
const eventDetailType = document.querySelector("#event-detail-type");
const eventDetailDescription = document.querySelector("#event-detail-description");
const eventPresenceStatus = document.querySelector("#event-presence-status");
const eventSaveStatus = document.querySelector("#event-save-status");
const myEventStatus = document.querySelector("#my-event-status");
const supplyList = document.querySelector("#supply-list");
const supplyListCount = document.querySelector("#supply-list-count");
const supplyPendingCount = document.querySelector("#supply-pending-count");
const mySupplyCount = document.querySelector("#my-supply-count");
const supplyEvent = document.querySelector("#supply-event");
const supplySaveStatus = document.querySelector("#supply-save-status");
const studyList = document.querySelector("#study-list");
const studyCount = document.querySelector("#study-count");
const studyTaskCount = document.querySelector("#study-task-count");
const studySaveStatus = document.querySelector("#study-save-status");
const forumList = document.querySelector("#forum-list");
const forumCount = document.querySelector("#forum-count");
const forumReplyCount = document.querySelector("#forum-reply-count");
const forumStatus = document.querySelector("#forum-save-status");
const authPanel = document.querySelector("#auth-panel");
const authEmail = document.querySelector("#auth-email");
const authPassword = document.querySelector("#auth-password");
const authLoginButton = document.querySelector("#auth-login-button");
const authUploadButton = document.querySelector("#auth-upload-button");
const authLogoutButton = document.querySelector("#auth-logout-button");
const authStatus = document.querySelector("#auth-status");
const setupFields = {
  main: document.querySelector("#setup-main-status"),
  config: document.querySelector("#setup-config-status"),
  login: document.querySelector("#setup-login-status"),
  upload: document.querySelector("#setup-upload-status"),
};
const backupFields = {
  exportButton: document.querySelector("#export-backup-button"),
  importInput: document.querySelector("#import-backup-input"),
  status: document.querySelector("#backup-status"),
};
const forumFields = {
  title: document.querySelector("#forum-title"),
  message: document.querySelector("#forum-message"),
};
const feedbackFields = {
  recipient: document.querySelector("#feedback-recipient"),
  message: document.querySelector("#feedback-message"),
  status: document.querySelector("#feedback-save-status"),
  myPositiveList: document.querySelector("#my-positive-feedback-list"),
  selectedProfileList: document.querySelector("#selected-profile-feedback-list"),
  adminList: document.querySelector("#admin-feedback-list"),
  myFeedbackCount: document.querySelector("#my-feedback-count"),
};

const fields = {
  name: document.querySelector("#profile-name"),
  rank: document.querySelector("#profile-rank"),
  marker: document.querySelector("#profile-marker"),
  role: document.querySelector("#profile-role"),
  responsibility: document.querySelector("#profile-responsibility"),
  permission: document.querySelector("#profile-permission"),
  obligation: document.querySelector("#profile-obligation"),
  next: document.querySelector("#profile-next"),
  notes: document.querySelector("#profile-notes"),
  about: document.querySelector("#profile-about"),
  headFather: document.querySelector("#profile-head-father"),
  headMother: document.querySelector("#profile-head-mother"),
};

const selfFields = {
  avatar: document.querySelector("#self-profile-avatar"),
  nameHeading: document.querySelector("#self-profile-name"),
  summary: document.querySelector("#self-profile-summary"),
  photoInput: document.querySelector("#self-photo-input"),
  photoPreview: document.querySelector("#self-photo-preview"),
  name: document.querySelector("#self-name"),
  marker: document.querySelector("#self-marker"),
  about: document.querySelector("#self-about"),
  headFather: document.querySelector("#self-head-father"),
  headMother: document.querySelector("#self-head-mother"),
  responsibility: document.querySelector("#self-responsibility"),
  rank: document.querySelector("#self-rank"),
  status: document.querySelector("#self-save-status"),
};

const studyFields = {
  title: document.querySelector("#study-title"),
  type: document.querySelector("#study-type"),
  date: document.querySelector("#study-date"),
  description: document.querySelector("#study-description"),
  file: document.querySelector("#study-file"),
};

const eventFields = {
  title: document.querySelector("#event-title"),
  type: document.querySelector("#event-type"),
  date: document.querySelector("#event-date"),
  time: document.querySelector("#event-time"),
  place: document.querySelector("#event-place"),
  description: document.querySelector("#event-description"),
};

const supplyFields = {
  title: document.querySelector("#supply-list-title"),
  event: document.querySelector("#supply-event"),
  items: document.querySelector("#supply-items"),
};

let currentProfileId = "larissa";
let currentMode = "admin";
let selectedEventId = events[0]?.id || "";

function loadSavedProfiles() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
    return Array.isArray(saved) ? saved : null;
  } catch {
    return null;
  }
}

function loadSavedEvents() {
  try {
    const saved = JSON.parse(localStorage.getItem(eventsStorageKey) || "null");
    return Array.isArray(saved) ? saved : null;
  } catch {
    return null;
  }
}

function loadSavedSupplyLists() {
  try {
    const saved = JSON.parse(localStorage.getItem(supplyStorageKey) || "null");
    return Array.isArray(saved) ? saved : null;
  } catch {
    return null;
  }
}

function loadSavedStudies() {
  try {
    const saved = JSON.parse(localStorage.getItem(studiesStorageKey) || "null");
    return Array.isArray(saved) ? saved : null;
  } catch {
    return null;
  }
}

function loadSavedFeedbacks() {
  try {
    const saved = JSON.parse(localStorage.getItem(feedbackStorageKey) || "null");
    return Array.isArray(saved) ? saved : null;
  } catch {
    return null;
  }
}

function loadSavedForumTopics() {
  try {
    const saved = JSON.parse(localStorage.getItem(forumStorageKey) || "null");
    return Array.isArray(saved) ? saved : null;
  } catch {
    return null;
  }
}

function persistProfiles() {
  localStorage.setItem(storageKey, JSON.stringify(profiles));
  queueRemoteSave("Perfis", saveProfilesRemote);
}

function persistEvents() {
  localStorage.setItem(eventsStorageKey, JSON.stringify(events));
  queueRemoteSave("Calendário", saveEventsRemote);
}

function persistSupplyLists() {
  localStorage.setItem(supplyStorageKey, JSON.stringify(supplyLists));
  queueRemoteSave("Listas", saveSupplyListsRemote);
}

function persistStudies() {
  localStorage.setItem(studiesStorageKey, JSON.stringify(studies));
  queueRemoteSave("Estudos", saveStudiesRemote);
}

function persistFeedbacks() {
  localStorage.setItem(feedbackStorageKey, JSON.stringify(feedbacks));
  queueRemoteSave("Feedbacks", saveFeedbacksRemote);
}

function persistForumTopics() {
  localStorage.setItem(forumStorageKey, JSON.stringify(forumTopics));
  queueRemoteSave("Fórum", saveForumRemote);
}

function normalizeFeedbacks(items) {
  return items
    .filter((feedback) => feedback.type !== "negative")
    .map((feedback) => ({
      id: feedback.id || `feedback-${Date.now()}`,
      toId: feedback.toId,
      message: feedback.message || "",
      createdAt: feedback.createdAt || new Date().toISOString().slice(0, 10),
    }))
    .filter((feedback) => feedback.toId && feedback.message);
}

function migrateSavedProfile(profile) {
  if (profile.id !== "luciano") return profile;
  return {
    ...profile,
    id: "luciana",
    name: profile.name === "Luciano" ? "Luciana" : profile.name,
  };
}

function mergeSavedProfiles(defaultProfiles, savedProfiles) {
  const defaultIds = new Set(defaultProfiles.map((profile) => profile.id));
  const savedById = new Map();

  savedProfiles.map(migrateSavedProfile).forEach((profile) => {
    savedById.set(profile.id, profile);
  });

  const mergedDefaults = defaultProfiles.map((defaultProfile) => {
    const savedProfile = savedById.get(defaultProfile.id);
    return normalizeProfile({ ...defaultProfile, ...(savedProfile || {}) });
  });

  const extraProfiles = [...savedById.values()]
    .filter((profile) => !defaultIds.has(profile.id))
    .map(normalizeProfile);

  return [...mergedDefaults, ...extraProfiles];
}

function normalizeProfile(profile) {
  const normalized = {
    marker: "✦",
    about: "",
    headFather: "",
    headMother: "",
    leader: "",
    responsibility: "",
    ...profile,
    ...(hierarchyOverrides[profile.id] || {}),
  };

  if (normalized.obligation === removedObligation) normalized.obligation = "Batismo";
  if (normalized.next === removedObligation) normalized.next = "Batismo";
  return normalized;
}

function isScreenAllowed(screenId) {
  if (currentMode === "admin") return true;
  return ["calendario", "itens", "estudos", "forum", "perfil"].includes(screenId);
}

function showScreen(screenId) {
  const safeScreen = isScreenAllowed(screenId) ? screenId : "calendario";

  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === safeScreen);
  });

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === safeScreen);
  });

  pageTitle.textContent = titles[safeScreen] || "TECPB";
}

function renderSyncStatus() {
  if (!syncStatus) return;

  const config = window.TECPB_SUPABASE || {};
  const hasRemoteConfig = Boolean(config.url && config.anonKey);

  syncStatus.textContent = hasRemoteConfig
    ? "Supabase configurado: aguardando login"
    : "Modo local: dados neste aparelho";
  syncStatus.classList.toggle("online", hasRemoteConfig);
  renderOnlineSetupStatus();
}

function renderOnlineSetupStatus() {
  const configured = hasSupabaseConfig();
  const loggedIn = Boolean(remoteSession);
  const lastUpload = localStorage.getItem(remoteUploadStorageKey);

  if (setupFields.main) {
    setupFields.main.textContent = configured ? loggedIn ? "Online" : "Configurado" : "Modo local";
    setupFields.main.classList.toggle("confirmed", configured && loggedIn);
  }
  if (setupFields.config) setupFields.config.textContent = configured ? "Configurado" : "Não configurado";
  if (setupFields.login) setupFields.login.textContent = loggedIn ? "Conectado" : "Aguardando";
  if (setupFields.upload) setupFields.upload.textContent = lastUpload ? `Enviada em ${feedbackDateLabel(lastUpload)}` : "Pendente";
}

function supabaseConfig() {
  return window.TECPB_SUPABASE || {};
}

function hasSupabaseConfig() {
  const config = supabaseConfig();
  return Boolean(config.url && config.anonKey);
}

let supabaseClientPromise = null;
let remoteSession = null;
let remoteSaveChain = Promise.resolve();

async function getSupabaseClient() {
  if (!hasSupabaseConfig()) return null;
  if (!supabaseClientPromise) {
    supabaseClientPromise = import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm")
      .then(({ createClient }) => createClient(supabaseConfig().url, supabaseConfig().anonKey));
  }
  return supabaseClientPromise;
}

function setAuthMessage(message) {
  if (authStatus) authStatus.textContent = message;
}

function profileIdFromValue(value) {
  if (!value) return "";
  const normalized = String(value).trim().toLowerCase();
  const profile = profiles.find((item) => item.id === normalized || item.name.toLowerCase() === normalized);
  return profile?.id || "";
}

function profileNameFromValue(value) {
  if (!value) return "Disponível";
  const profile = findProfile(value) || profiles.find((item) => item.name === value);
  return profile?.name || value;
}

function isCurrentProfileValue(value) {
  return profileIdFromValue(value) === currentProfileId;
}

async function ensureAuthenticatedClient() {
  const client = await getSupabaseClient();
  if (!client) return null;

  const { data } = await client.auth.getSession();
  remoteSession = data.session;
  return remoteSession ? client : null;
}

function queueRemoteSave(label, saveFn) {
  if (!hasSupabaseConfig()) return;

  remoteSaveChain = remoteSaveChain
    .then(async () => {
      const client = await ensureAuthenticatedClient();
      if (!client) return;
      await saveFn(client);
      if (syncStatus) syncStatus.textContent = `${label} sincronizado`;
    })
    .catch((error) => {
      console.error(error);
      if (syncStatus) syncStatus.textContent = `Falha ao sincronizar ${label.toLowerCase()}`;
    });
}

async function upsertRows(client, table, rows) {
  if (!rows.length) return;
  const { error } = await client.from(table).upsert(rows);
  if (error) throw error;
}

function safeFileName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9.-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase() || "foto";
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

async function uploadProfilePhoto(file, profileId) {
  const client = await ensureAuthenticatedClient();
  if (!client) return readFileAsDataUrl(file);

  const extension = safeFileName(file.name).split(".").pop() || "jpg";
  const path = `${profileId}/${Date.now()}.${extension}`;
  const { error } = await client.storage.from("profile-photos").upload(path, file, {
    cacheControl: "3600",
    upsert: true,
  });
  if (error) throw error;

  const { data } = client.storage.from("profile-photos").getPublicUrl(path);
  return data.publicUrl;
}

async function updateProfilePhoto(file, profile, afterSave) {
  if (!file || !profile) return;

  try {
    if (syncStatus && hasSupabaseConfig()) syncStatus.textContent = "Enviando foto...";
    profile.photo = await uploadProfilePhoto(file, profile.id);
    persistProfiles();
    afterSave();
    if (syncStatus && hasSupabaseConfig()) syncStatus.textContent = "Foto sincronizada";
  } catch (error) {
    console.error(error);
    profile.photo = await readFileAsDataUrl(file);
    persistProfiles();
    afterSave();
    if (syncStatus) syncStatus.textContent = "Foto salva localmente";
  }
}

function profileToRemote(profile) {
  return {
    id: profile.id,
    rank: profile.rank || 99,
    leader: profile.leader || "",
    marker: profile.marker || "✦",
    initials: profile.initials || "",
    name: profile.name,
    spiritual_role: profile.role || "Médium",
    permission_label: profile.permission || "Médium",
    obligation: profile.obligation || "",
    next_obligation: profile.next || "",
    responsibility: profile.responsibility || "",
    notes: profile.notes || "",
    about: profile.about || "",
    head_father: profile.headFather || "",
    head_mother: profile.headMother || "",
    photo_url: profile.photo || "",
    updated_at: new Date().toISOString(),
  };
}

function profileFromRemote(row) {
  return normalizeProfile({
    id: row.id,
    rank: row.rank,
    leader: row.leader,
    marker: row.marker,
    initials: row.initials,
    name: row.name,
    role: row.spiritual_role,
    permission: row.permission_label,
    obligation: row.obligation,
    next: row.next_obligation,
    responsibility: row.responsibility,
    notes: row.notes,
    about: row.about,
    headFather: row.head_father,
    headMother: row.head_mother,
    photo: row.photo_url,
  });
}

async function saveProfilesRemote(client) {
  await upsertRows(client, "profiles", profiles.map(profileToRemote));
}

async function saveEventsRemote(client) {
  await upsertRows(client, "events", events.map((event) => ({
    id: event.id,
    title: event.title,
    type: event.type,
    event_date: event.date,
    event_time: event.time || null,
    place: event.place || "Terreiro",
    description: event.description || "",
  })));

  const responses = events.flatMap((event) => Object.entries(event.responses || {}).map(([profileId, response]) => ({
    event_id: event.id,
    profile_id: profileIdFromValue(profileId) || profileId,
    response,
    updated_at: new Date().toISOString(),
  })));
  await upsertRows(client, "event_responses", responses);
}

async function saveSupplyListsRemote(client) {
  await upsertRows(client, "supply_lists", supplyLists.map((list) => ({
    id: list.id,
    title: list.title,
    event_id: list.eventId || null,
  })));

  const items = supplyLists.flatMap((list) => list.items.map((item) => ({
    id: item.id,
    list_id: list.id,
    name: item.name,
    assigned_to: profileIdFromValue(item.assignedTo) || null,
    delivered: Boolean(item.delivered),
    delivery_photo_url: item.deliveryPhoto || "",
    updated_at: new Date().toISOString(),
  })));
  await upsertRows(client, "supply_items", items);
}

async function saveStudiesRemote(client) {
  await upsertRows(client, "studies", studies.map((study) => ({
    id: study.id,
    title: study.title,
    type: study.type,
    due_date: study.dueDate || null,
    description: study.description || "",
    file_name: study.fileName || "",
    file_url: study.fileUrl || "",
  })));

  const submissions = studies
    .filter((study) => study.response || study.completed)
    .map((study) => ({
      id: `${study.id}-${currentProfileId}`,
      study_id: study.id,
      profile_id: currentProfileId,
      response: study.response || "",
      completed: Boolean(study.completed),
      updated_at: new Date().toISOString(),
    }));
  await upsertRows(client, "study_submissions", submissions);
}

async function saveFeedbacksRemote(client) {
  await upsertRows(client, "positive_feedback", feedbacks.map((feedback) => ({
    id: feedback.id,
    to_profile_id: feedback.toId,
    message: feedback.message,
    created_at: feedback.createdAt,
  })));
}

async function saveForumRemote(client) {
  await upsertRows(client, "forum_topics", forumTopics.map((topic) => ({
    id: topic.id,
    title: topic.title,
    message: topic.message,
    author_profile_id: null,
    anonymous: true,
    created_at: topic.createdAt,
  })));

  const replies = forumTopics.flatMap((topic) => (topic.replies || []).map((reply) => ({
    id: reply.id,
    topic_id: topic.id,
    message: reply.message,
    author_profile_id: null,
    anonymous: true,
    created_at: reply.createdAt,
  })));
  await upsertRows(client, "forum_replies", replies);
}

async function uploadLocalDataToRemote() {
  const client = await ensureAuthenticatedClient();
  if (!client) {
    setAuthMessage("Entre para enviar os dados");
    return;
  }

  if (authUploadButton) authUploadButton.disabled = true;
  setAuthMessage("Enviando dados locais...");
  if (syncStatus) syncStatus.textContent = "Sincronizando dados locais";

  try {
    await saveProfilesRemote(client);
    await saveEventsRemote(client);
    await saveSupplyListsRemote(client);
    await saveStudiesRemote(client);
    await saveFeedbacksRemote(client);
    await saveForumRemote(client);
    localStorage.setItem(remoteUploadStorageKey, new Date().toISOString());
    setAuthMessage("Dados locais enviados");
    if (syncStatus) syncStatus.textContent = "Dados locais sincronizados";
    renderOnlineSetupStatus();
  } catch (error) {
    console.error(error);
    setAuthMessage("Não foi possível enviar os dados");
    if (syncStatus) syncStatus.textContent = "Falha na sincronização";
  } finally {
    if (authUploadButton) authUploadButton.disabled = false;
  }
}

function saveAllLocalOnly() {
  localStorage.setItem(storageKey, JSON.stringify(profiles));
  localStorage.setItem(eventsStorageKey, JSON.stringify(events));
  localStorage.setItem(supplyStorageKey, JSON.stringify(supplyLists));
  localStorage.setItem(studiesStorageKey, JSON.stringify(studies));
  localStorage.setItem(feedbackStorageKey, JSON.stringify(feedbacks));
  localStorage.setItem(forumStorageKey, JSON.stringify(forumTopics));
}

function currentBackupData() {
  return {
    version: 1,
    app: "TECPB",
    exportedAt: new Date().toISOString(),
    profiles,
    events,
    supplyLists,
    studies,
    feedbacks,
    forumTopics,
  };
}

function exportLocalBackup() {
  const backup = JSON.stringify(currentBackupData(), null, 2);
  const blob = new Blob([backup], { type: "application/json" });
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  link.href = URL.createObjectURL(blob);
  link.download = `tecpb-backup-${date}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  if (backupFields.status) backupFields.status.textContent = "Backup exportado.";
}

function replaceArray(target, nextItems) {
  target.splice(0, target.length, ...(Array.isArray(nextItems) ? nextItems : []));
}

function importLocalBackup(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const backup = JSON.parse(reader.result);
      if (backup.app !== "TECPB") throw new Error("Arquivo inválido");

      replaceArray(profiles, mergeSavedProfiles(profiles, backup.profiles || []));
      replaceArray(events, backup.events || []);
      replaceArray(supplyLists, backup.supplyLists || []);
      replaceArray(studies, backup.studies || []);
      replaceArray(feedbacks, normalizeFeedbacks(backup.feedbacks || []));
      replaceArray(forumTopics, backup.forumTopics || []);
      selectedEventId = events[0]?.id || "";
      saveAllLocalOnly();
      renderEverything();
      if (backupFields.status) backupFields.status.textContent = "Backup importado.";
    } catch (error) {
      console.error(error);
      if (backupFields.status) backupFields.status.textContent = "Não foi possível importar este backup.";
    } finally {
      if (backupFields.importInput) backupFields.importInput.value = "";
    }
  });
  reader.readAsText(file);
}

async function loadRemoteData(client) {
  const { data: userRow } = await client.from("app_users").select("*").eq("id", remoteSession.user.id).maybeSingle();
  if (userRow?.profile_id) currentProfileId = userRow.profile_id;
  if (userRow?.role) currentMode = userRow.role === "admin" ? "admin" : "medium";

  const [
    remoteProfiles,
    remoteEvents,
    remoteResponses,
    remoteLists,
    remoteItems,
    remoteStudies,
    remoteSubmissions,
    remoteFeedbacks,
    remoteTopics,
    remoteReplies,
  ] = await Promise.all([
    client.from("profiles").select("*").order("rank", { ascending: true }),
    client.from("events").select("*").order("event_date", { ascending: true }),
    client.from("event_responses").select("*"),
    client.from("supply_lists").select("*").order("created_at", { ascending: false }),
    client.from("supply_items").select("*"),
    client.from("studies").select("*").order("created_at", { ascending: false }),
    client.from("study_submissions").select("*").eq("profile_id", currentProfileId),
    client.from("positive_feedback").select("*").order("created_at", { ascending: false }),
    client.from("forum_topics").select("*").order("created_at", { ascending: false }),
    client.from("forum_replies").select("*").order("created_at", { ascending: true }),
  ]);

  const errors = [
    remoteProfiles.error,
    remoteEvents.error,
    remoteResponses.error,
    remoteLists.error,
    remoteItems.error,
    remoteStudies.error,
    remoteSubmissions.error,
    remoteFeedbacks.error,
    remoteTopics.error,
    remoteReplies.error,
  ].filter(Boolean);
  if (errors.length) throw errors[0];

  if (remoteProfiles.data?.length) profiles.splice(0, profiles.length, ...remoteProfiles.data.map(profileFromRemote));

  const responsesByEvent = new Map();
  (remoteResponses.data || []).forEach((response) => {
    if (!responsesByEvent.has(response.event_id)) responsesByEvent.set(response.event_id, {});
    responsesByEvent.get(response.event_id)[response.profile_id] = response.response;
  });
  if (remoteEvents.data?.length) {
    events.splice(0, events.length, ...remoteEvents.data.map((event) => ({
      id: event.id,
      title: event.title,
      type: event.type,
      date: event.event_date,
      time: event.event_time || "",
      place: event.place || "Terreiro",
      description: event.description || "",
      responses: responsesByEvent.get(event.id) || {},
    })));
    selectedEventId = events[0]?.id || "";
  }

  if (remoteLists.data?.length) {
    const itemsByList = new Map();
    (remoteItems.data || []).forEach((item) => {
      if (!itemsByList.has(item.list_id)) itemsByList.set(item.list_id, []);
      itemsByList.get(item.list_id).push({
        id: item.id,
        name: item.name,
        assignedTo: item.assigned_to || "",
        delivered: item.delivered,
        deliveryPhoto: item.delivery_photo_url || "",
      });
    });
    supplyLists.splice(0, supplyLists.length, ...remoteLists.data.map((list) => ({
      id: list.id,
      title: list.title,
      eventId: list.event_id || "",
      items: itemsByList.get(list.id) || [],
    })));
  }

  if (remoteStudies.data?.length) {
    const submissionsByStudy = new Map((remoteSubmissions.data || []).map((submission) => [submission.study_id, submission]));
    studies.splice(0, studies.length, ...remoteStudies.data.map((study) => {
      const submission = submissionsByStudy.get(study.id);
      return {
        id: study.id,
        title: study.title,
        type: study.type,
        dueDate: study.due_date || "",
        description: study.description || "",
        fileName: study.file_name || "",
        fileUrl: study.file_url || "",
        response: submission?.response || "",
        completed: Boolean(submission?.completed),
      };
    }));
  }

  feedbacks.splice(0, feedbacks.length, ...normalizeFeedbacks((remoteFeedbacks.data || []).map((feedback) => ({
    id: feedback.id,
    toId: feedback.to_profile_id,
    message: feedback.message,
    createdAt: feedback.created_at,
  }))));

  if (remoteTopics.data?.length) {
    const repliesByTopic = new Map();
    (remoteReplies.data || []).forEach((reply) => {
      if (!repliesByTopic.has(reply.topic_id)) repliesByTopic.set(reply.topic_id, []);
      repliesByTopic.get(reply.topic_id).push({
        id: reply.id,
        message: reply.message,
        author: "Anônimo",
        createdAt: reply.created_at,
      });
    });
    forumTopics.splice(0, forumTopics.length, ...remoteTopics.data.map((topic) => ({
      id: topic.id,
      title: topic.title,
      message: topic.message,
      author: "Anônimo",
      createdAt: topic.created_at,
      replies: repliesByTopic.get(topic.id) || [],
    })));
  }

  saveAllLocalOnly();
  renderEverything();
  setMode(currentMode);
  if (syncStatus) syncStatus.textContent = "Dados online carregados";
  renderOnlineSetupStatus();
}

function renderEverything() {
  renderAllProfiles();
  loadProfile(currentProfileId);
  renderSelfProfile();
  renderEvents();
  renderSupplyLists();
  renderStudies();
  renderFeedback();
  renderForum();
}

async function refreshAuthState() {
  const client = await getSupabaseClient();
  if (!client) return;

  const { data } = await client.auth.getSession();
  remoteSession = data.session;
  const isLoggedIn = Boolean(remoteSession);
  renderOnlineSetupStatus();

  if (authLoginButton) authLoginButton.hidden = isLoggedIn;
  if (authUploadButton) authUploadButton.hidden = !isLoggedIn;
  if (authLogoutButton) authLogoutButton.hidden = !isLoggedIn;
  if (authEmail) authEmail.hidden = isLoggedIn;
  if (authPassword) authPassword.hidden = isLoggedIn;

  if (!isLoggedIn) {
    setAuthMessage("Entre com o e-mail convidado");
    if (syncStatus) syncStatus.textContent = "Supabase configurado: aguardando login";
    return;
  }

  setAuthMessage(remoteSession.user.email || "Conta conectada");
  await loadRemoteData(client);
}

async function initSupabaseAuth() {
  renderSyncStatus();
  if (!hasSupabaseConfig()) return;

  if (authPanel) authPanel.hidden = false;
  const client = await getSupabaseClient();
  if (!client) return;

  client.auth.onAuthStateChange(() => {
    refreshAuthState().catch((error) => {
      console.error(error);
      setAuthMessage("Não foi possível sincronizar");
    });
  });
  await refreshAuthState();
}

function setMode(mode) {
  currentMode = mode;
  document.body.dataset.mode = mode;

  document.querySelectorAll(".role-switch button").forEach((button) => {
    const label = button.textContent.trim();
    button.classList.toggle(
      "selected",
      (mode === "admin" && label === "Admin") || (mode === "medium" && label === "Médium"),
    );
  });

  navButtons.forEach((button) => {
    const adminOnly = button.dataset.adminOnly === "true";
    button.classList.toggle("is-hidden", mode === "medium" && adminOnly);
  });

  const activeScreen = document.querySelector(".screen.active")?.id || "calendario";
  showScreen(activeScreen);
}

function orderedProfiles() {
  return [...profiles].sort((a, b) => {
    const leaderOrder = { pai: 0, mae: 1 };
    const aLeader = a.leader in leaderOrder;
    const bLeader = b.leader in leaderOrder;

    if (aLeader && bLeader) return leaderOrder[a.leader] - leaderOrder[b.leader];
    if (aLeader) return -1;
    if (bLeader) return 1;
    return a.rank - b.rank;
  });
}

function initialsFromName(name) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function findProfile(profileId) {
  return profiles.find((profile) => profile.id === profileId);
}

function selfProfile() {
  return findProfile("larissa");
}

function setSelectValue(select, value) {
  if (!select) return;
  const hasOption = [...select.options].some((option) => option.value === value);
  if (!hasOption) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  }
  select.value = value;
}

function renderPhoto(target, profile) {
  if (!target) return;
  target.textContent = "";
  if (profile.photo) {
    const image = document.createElement("img");
    image.src = profile.photo;
    image.alt = `Foto de ${profile.name}`;
    target.append(image);
    return;
  }

  target.textContent = profile.initials || initialsFromName(profile.name) || "FT";
}

function createMarker(profile) {
  const marker = document.createElement("span");
  marker.className = "profile-marker";
  marker.textContent = profile.marker || "✦";
  return marker;
}

function createProfileCard(profile) {
  const card = document.createElement("button");
  card.className = "member-card";
  card.type = "button";
  card.dataset.profileId = profile.id;
  card.classList.toggle("current", profile.id === currentProfileId);
  if (profile.leader) card.classList.add("leader-card", `leader-${profile.leader}`);

  const rank = document.createElement("span");
  if (profile.leader) {
    rank.className = `member-crown ${profile.leader === "pai" ? "crown-large" : "crown-small"}`;
    rank.textContent = profile.marker || (profile.leader === "pai" ? "♛" : "♕");
  } else {
    rank.className = "member-rank";
    rank.textContent = profile.rank;
  }

  const photo = document.createElement("span");
  photo.className = "member-photo";
  renderPhoto(photo, profile);

  const text = document.createElement("span");
  const name = document.createElement("strong");
  if (!profile.leader) name.append(createMarker(profile), ` ${profile.name}`);
  else name.textContent = profile.name;
  const role = document.createElement("small");
  role.textContent = profile.role;
  text.append(name, role);
  if (profile.responsibility) {
    const responsibility = document.createElement("small");
    responsibility.className = "member-function";
    responsibility.textContent = profile.responsibility;
    text.append(responsibility);
  }

  const status = document.createElement("em");
  if (profile.leader) {
    const badge = document.createElement("span");
    badge.className = "role-badge admin";
    badge.textContent = "ADM";
    status.append(badge);
  } else if (profile.permission === "Administrador") {
    const badge = document.createElement("span");
    badge.className = "role-badge admin";
    badge.textContent = "ADM";
    status.append(badge, ` ${profile.obligation}`);
  } else {
    status.textContent = profile.obligation;
  }

  card.append(rank, photo, text, status);
  card.addEventListener("click", () => loadProfile(profile.id));
  return card;
}

function updateAdminSummary() {
  const admins = orderedProfiles().filter((profile) => profile.permission === "Administrador");

  if (profileCount) profileCount.textContent = profiles.length;
  if (adminCount) adminCount.textContent = admins.length;
  if (adminNames) adminNames.textContent = admins.map((profile) => profile.name).join(", ");

  if (!adminPermissionList) return;
  adminPermissionList.textContent = "";

  admins.forEach((profile) => {
    const item = document.createElement("div");
    const name = document.createElement("strong");
    const description = document.createElement("small");

    name.textContent = profile.name;
    description.textContent = profile.role;
    const badge = document.createElement("span");
    badge.className = "role-badge admin";
    badge.textContent = "ADM";
    item.append(name, description, badge);
    adminPermissionList.append(item);
  });
}

function renderAllProfiles() {
  if (!hierarchyList) return;

  hierarchyList.textContent = "";
  orderedProfiles().forEach((profile) => {
    hierarchyList.append(createProfileCard(profile));
  });

  updateAdminSummary();
}

function fillPhotoPreview(profile) {
  if (!photoPreview) return;
  renderPhoto(photoPreview, { ...profile, initials: "Foto" });
  if (!profile.photo) {
    photoPreview.textContent = "Foto";
  }
}

function setLeaderEditingState(profile) {
  const rankField = fields.rank?.closest(".field");
  const rankLabel = rankField?.querySelector("span");

  if (!fields.rank || !rankLabel) return;

  if (profile.leader) {
    rankLabel.textContent = "Liderança";
    fields.rank.value = "";
    fields.rank.placeholder = "Sem posição";
    fields.rank.disabled = true;
  } else {
    rankLabel.textContent = "Posição na hierarquia";
    fields.rank.disabled = false;
    fields.rank.placeholder = "";
    fields.rank.value = profile.rank;
  }
}

function loadProfile(profileId) {
  const profile = findProfile(profileId);
  if (!profile) return;

  currentProfileId = profile.id;
  document.querySelectorAll(".member-card").forEach((card) => {
    card.classList.toggle("current", card.dataset.profileId === profile.id);
  });

  fields.name.value = profile.name;
  fields.marker.value = profile.marker || "✦";
  fields.role.value = profile.role;
  if (fields.responsibility) fields.responsibility.value = profile.responsibility || "";
  setSelectValue(fields.permission, profile.permission);
  setSelectValue(fields.obligation, profile.obligation);
  setSelectValue(fields.next, profile.next);
  fields.notes.value = profile.notes;
  fields.about.value = profile.about || "";
  fields.headFather.value = profile.headFather || "";
  fields.headMother.value = profile.headMother || "";
  setLeaderEditingState(profile);
  if (photoInput) photoInput.value = "";
  fillPhotoPreview(profile);
  renderFeedback();
  if (saveStatus) saveStatus.textContent = `Editando ${profile.name}`;
}

function saveCurrentProfile() {
  const profile = findProfile(currentProfileId);
  if (!profile) return;

  profile.name = fields.name.value.trim() || profile.name;
  if (!profile.leader) profile.rank = Number(fields.rank.value) || profile.rank;
  profile.marker = fields.marker.value.trim() || (profile.leader === "pai" ? "♛" : profile.leader === "mae" ? "♕" : "✦");
  profile.role = fields.role.value.trim() || "Médium";
  profile.responsibility = fields.responsibility?.value.trim() || "";
  profile.permission = fields.permission.value;
  profile.obligation = profile.leader ? "Não se aplica" : fields.obligation.value;
  profile.next = profile.leader ? "Sem previsão" : fields.next.value;
  profile.notes = fields.notes.value.trim();
  profile.about = fields.about.value.trim();
  profile.headFather = fields.headFather.value.trim();
  profile.headMother = fields.headMother.value.trim();
  profile.initials = initialsFromName(profile.name) || profile.initials;

  persistProfiles();
  renderAllProfiles();
  loadProfile(profile.id);
  renderSelfProfile();
  renderFeedback();
  if (saveStatus) saveStatus.textContent = `${profile.name} foi atualizado no protótipo.`;
}

function createNewProfile() {
  const nextRank = Math.max(0, ...profiles.filter((profile) => !profile.leader).map((profile) => profile.rank)) + 1;
  const id = `perfil-${Date.now()}`;
  const profile = {
    id,
    rank: nextRank,
    leader: "",
    marker: "✦",
    initials: "NP",
    name: "Novo perfil",
    role: "Médium",
    permission: "Médium",
    obligation: "Iniciação",
    next: "Batismo",
    notes: "Novo perfil em preenchimento.",
    about: "",
    headFather: "",
    headMother: "",
    photo: "",
  };

  profiles.push(profile);
  currentProfileId = profile.id;
  persistProfiles();
  renderAllProfiles();
  loadProfile(profile.id);
  renderFeedback();
}

function moveProfile(direction) {
  const ordered = orderedProfiles();
  const currentIndex = ordered.findIndex((profile) => profile.id === currentProfileId);
  if (currentIndex === -1) return;

  const nextIndex = (currentIndex + direction + ordered.length) % ordered.length;
  loadProfile(ordered[nextIndex].id);
}

function renderSelfProfile() {
  const profile = selfProfile();
  if (!profile) return;

  renderPhoto(selfFields.avatar, profile);
  renderPhoto(selfFields.photoPreview, { ...profile, initials: "Foto" });
  if (!profile.photo && selfFields.photoPreview) selfFields.photoPreview.textContent = "Foto";

  selfFields.nameHeading.textContent = profile.name;
  const currentFunction = profile.responsibility ? ` - função: ${profile.responsibility}` : "";
  selfFields.summary.textContent = `${profile.role} - ${profile.obligation} - próxima etapa: ${profile.next}${currentFunction}`;
  selfFields.name.value = profile.name;
  selfFields.marker.value = profile.marker || "✦";
  selfFields.about.value = profile.about || "";
  selfFields.headFather.value = profile.headFather || "";
  selfFields.headMother.value = profile.headMother || "";
  if (selfFields.responsibility) selfFields.responsibility.textContent = profile.responsibility || "A definir";
  if (selfFields.rank) selfFields.rank.textContent = profile.rank || "Sem posição";

  const userName = document.querySelector(".user-pill strong");
  const userRole = document.querySelector(".user-pill small");
  const userAvatar = document.querySelector(".user-pill .avatar");
  if (userName) userName.textContent = profile.name;
  if (userRole) userRole.textContent = profile.permission === "Administrador" ? "Administradora" : profile.role;
  if (userAvatar) renderPhoto(userAvatar, profile);
}

function saveSelfProfile() {
  const profile = selfProfile();
  if (!profile) return;

  profile.name = selfFields.name.value.trim() || profile.name;
  profile.marker = selfFields.marker.value.trim() || "✦";
  profile.about = selfFields.about.value.trim();
  profile.headFather = selfFields.headFather.value.trim();
  profile.headMother = selfFields.headMother.value.trim();
  profile.initials = initialsFromName(profile.name) || profile.initials;

  persistProfiles();
  renderSelfProfile();
  renderAllProfiles();
  renderFeedback();
  if (currentProfileId === profile.id) loadProfile(profile.id);
  if (selfFields.status) selfFields.status.textContent = "Seu perfil foi atualizado no protótipo.";
}

function formatDate(dateValue) {
  if (!dateValue) return "Sem prazo";
  const [year, month, day] = dateValue.split("-");
  return `${day}/${month}/${year}`;
}

function eventYear(event) {
  return Number((event.date || "").slice(0, 4)) || new Date().getFullYear();
}

function orderedEvents() {
  return [...events].sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
}

function selectedYear() {
  return Number(calendarYear?.value) || new Date().getFullYear();
}

function renderCalendarYears() {
  if (!calendarYear) return;

  const current = new Date().getFullYear();
  const years = new Set([current, current + 1, current + 2, ...events.map(eventYear)]);
  const currentSelection = calendarYear.value || String(current);

  calendarYear.textContent = "";
  [...years].sort().forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    calendarYear.append(option);
  });

  calendarYear.value = years.has(Number(currentSelection)) ? currentSelection : String(current);
  if (calendarYearLabel) calendarYearLabel.textContent = calendarYear.value;
}

function eventDateBlock(event) {
  const [, month, day] = event.date.split("-");
  const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
  return { day, month: months[Number(month) - 1] || "DATA" };
}

function renderEvents() {
  if (!eventList) return;

  renderCalendarYears();
  const year = selectedYear();
  const visibleEvents = orderedEvents().filter((event) => eventYear(event) === year);

  eventList.textContent = "";
  visibleEvents.forEach((event) => {
    const card = document.createElement("article");
    card.className = "event-card";
    card.classList.toggle("selected-event", event.id === selectedEventId);

    const block = document.createElement("div");
    block.className = event.type === "Estudo" ? "date-block muted" : "date-block";
    const dateParts = eventDateBlock(event);
    block.innerHTML = `<strong>${dateParts.day}</strong><span>${dateParts.month}</span>`;

    const body = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = event.title;
    const meta = document.createElement("p");
    meta.textContent = `${formatDate(event.date)}, ${event.time || "--:--"} - ${event.place || "Terreiro"}`;
    const tags = document.createElement("div");
    tags.className = "status-row";
    const myResponse = event.responses?.larissa || "Aguardando resposta";
    const responseTag = document.createElement("span");
    responseTag.className = myResponse === "Vou" ? "tag confirmed" : myResponse === "Não vou" ? "tag pending" : "tag";
    responseTag.textContent = myResponse;
    const countTag = document.createElement("span");
    countTag.className = "tag";
    countTag.textContent = `${Object.keys(event.responses || {}).length} respostas`;
    tags.append(responseTag, countTag);
    body.append(title, meta, tags);

    card.append(block, body);
    card.addEventListener("click", () => selectEvent(event.id));
    eventList.append(card);
  });

  if (!visibleEvents.some((event) => event.id === selectedEventId)) {
    selectedEventId = visibleEvents[0]?.id || events[0]?.id || "";
  }

  if (eventCount) eventCount.textContent = visibleEvents.length;
  selectEvent(selectedEventId, false);
  populateSupplyEvents();
}

function selectEvent(eventId, rerender = true) {
  const event = events.find((item) => item.id === eventId);
  if (!event) {
    if (eventDetailTitle) eventDetailTitle.textContent = "Detalhes do evento";
    if (eventDetailDescription) eventDetailDescription.textContent = "Nenhum evento cadastrado para este ano.";
    return;
  }

  selectedEventId = event.id;
  if (eventDetailTitle) eventDetailTitle.textContent = event.title;
  if (eventDetailType) eventDetailType.textContent = event.type;
  if (eventDetailDescription) {
    eventDetailDescription.textContent = `${formatDate(event.date)}, ${event.time || "--:--"} - ${event.place || "Terreiro"}. ${event.description}`;
  }
  const response = event.responses?.[currentProfileId] || "Pendente";
  if (eventPresenceStatus) eventPresenceStatus.textContent = `Sua resposta: ${response}`;
  if (myEventStatus) myEventStatus.textContent = response;

  if (rerender) renderEvents();
}

function setEventPresence(response) {
  const event = events.find((item) => item.id === selectedEventId);
  if (!event) return;
  event.responses = event.responses || {};
  event.responses[currentProfileId] = response;
  persistEvents();
  selectEvent(event.id);
}

function addEvent() {
  const event = {
    id: `evento-${Date.now()}`,
    title: eventFields.title.value.trim() || "Novo evento",
    type: eventFields.type.value,
    date: eventFields.date.value || `${new Date().getFullYear()}-01-01`,
    time: eventFields.time.value || "19:30",
    place: eventFields.place.value.trim() || "Terreiro",
    description: eventFields.description.value.trim(),
    responses: {},
  };

  events.push(event);
  selectedEventId = event.id;
  persistEvents();
  renderEvents();
  if (eventSaveStatus) eventSaveStatus.textContent = `${event.title} foi publicado no calendário.`;
}

function populateSupplyEvents() {
  if (!supplyEvent) return;

  const currentValue = supplyEvent.value;
  supplyEvent.textContent = "";
  const generalOption = document.createElement("option");
  generalOption.value = "";
  generalOption.textContent = "Sem evento - lista geral/mensal";
  supplyEvent.append(generalOption);

  orderedEvents().forEach((event) => {
    const option = document.createElement("option");
    option.value = event.id;
    option.textContent = `${formatDate(event.date)} - ${event.title}`;
    supplyEvent.append(option);
  });

  if (events.some((event) => event.id === currentValue)) {
    supplyEvent.value = currentValue;
  } else {
    supplyEvent.value = "";
  }
}

function renderSupplyLists() {
  if (!supplyList) return;

  supplyList.textContent = "";
  supplyLists.forEach((list) => {
    const wrapper = document.createElement("article");
    wrapper.className = "supply-group";

    const event = events.find((item) => item.id === list.eventId);
    const header = document.createElement("div");
    header.className = "panel-heading";
    const title = document.createElement("h2");
    title.textContent = list.title;
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = event ? formatDate(event.date) : "Lista geral";
    header.append(title, tag);

    const items = document.createElement("div");
    items.className = "item-list";
    list.items.forEach((item) => {
      const row = document.createElement("article");
      row.className = "supply-item";

      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = item.delivered;
      checkbox.disabled = true;
      const name = document.createElement("span");
      name.textContent = item.name;
      label.append(checkbox, name);

      const owner = document.createElement("strong");
      owner.textContent = profileNameFromValue(item.assignedTo);

      const button = document.createElement("button");
      button.type = "button";
      button.className = item.assignedTo ? "secondary-button" : "primary-button";
      button.textContent = isCurrentProfileValue(item.assignedTo)
        ? item.delivered ? "Entregue" : "Marcar entrega"
        : item.assignedTo ? "Assumido" : "Assumir";
      button.disabled = item.assignedTo && !isCurrentProfileValue(item.assignedTo);
      button.addEventListener("click", () => updateSupplyItem(list.id, item.id));

      row.append(label, owner, button);
      items.append(row);
    });

    wrapper.append(header, items);
    supplyList.append(wrapper);
  });

  const allItems = supplyLists.flatMap((list) => list.items);
  if (supplyListCount) supplyListCount.textContent = supplyLists.length;
  if (supplyPendingCount) supplyPendingCount.textContent = allItems.filter((item) => !item.assignedTo || !item.delivered).length;
  if (mySupplyCount) mySupplyCount.textContent = allItems.filter((item) => isCurrentProfileValue(item.assignedTo)).length;
}

function updateSupplyItem(listId, itemId) {
  const list = supplyLists.find((entry) => entry.id === listId);
  const item = list?.items.find((entry) => entry.id === itemId);
  if (!item) return;

  if (!item.assignedTo) {
    item.assignedTo = currentProfileId;
    item.delivered = false;
  } else if (isCurrentProfileValue(item.assignedTo)) {
    item.delivered = !item.delivered;
  }

  persistSupplyLists();
  renderSupplyLists();
}

function addSupplyList() {
  const names = supplyFields.items.value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  const list = {
    id: `lista-${Date.now()}`,
    title: supplyFields.title.value.trim() || "Nova lista",
    eventId: supplyFields.event.value || "",
    items: names.map((name, index) => ({
      id: `item-${Date.now()}-${index}`,
      name,
      assignedTo: "",
      delivered: false,
    })),
  };

  supplyLists.unshift(list);
  persistSupplyLists();
  renderSupplyLists();
  if (supplySaveStatus) supplySaveStatus.textContent = `${list.title} foi publicada para a corrente.`;
}

function renderStudies() {
  if (!studyList) return;

  studyList.textContent = "";
  studies.forEach((study) => {
    const item = document.createElement("article");
    item.className = "study-item";

    const header = document.createElement("div");
    header.className = "study-header";
    const title = document.createElement("h3");
    title.textContent = study.title;
    const tag = document.createElement("span");
    tag.className = study.type === "Entrega" ? "tag pending" : "tag confirmed";
    tag.textContent = study.type;
    header.append(title, tag);

    const description = document.createElement("p");
    description.textContent = study.description;

    const meta = document.createElement("div");
    meta.className = "study-meta";
    meta.append(`Prazo: ${formatDate(study.dueDate)}`);
    if (study.fileName) {
      const file = document.createElement("span");
      file.textContent = `Anexo: ${study.fileName}`;
      meta.append(file);
    }

    const responseField = document.createElement("textarea");
    responseField.className = "study-response";
    responseField.value = study.response || "";
    responseField.placeholder = "Escreva sua resposta, resumo ou observação de entrega.";
    responseField.setAttribute("aria-label", `Resposta para ${study.title}`);

    const actions = document.createElement("div");
    actions.className = "study-actions";
    const answer = document.createElement("button");
    answer.className = "secondary-button";
    answer.type = "button";
    answer.textContent = "Enviar resposta";
    answer.addEventListener("click", () => {
      study.response = responseField.value.trim();
      persistStudies();
      renderStudies();
    });

    const done = document.createElement("button");
    done.className = study.completed ? "secondary-button" : "primary-button";
    done.type = "button";
    done.textContent = study.completed ? "Entregue" : "Marcar entrega";
    done.addEventListener("click", () => {
      study.completed = !study.completed;
      persistStudies();
      renderStudies();
    });
    actions.append(answer, done);

    item.append(header, description, meta, responseField, actions);
    studyList.append(item);
  });

  if (studyCount) studyCount.textContent = studies.length;
  if (studyTaskCount) {
    studyTaskCount.textContent = studies.filter((study) => study.type === "Entrega" && !study.completed).length;
  }
}

function addStudy() {
  const fileName = studyFields.file.files?.[0]?.name || "";
  const study = {
    id: `estudo-${Date.now()}`,
    title: studyFields.title.value.trim() || "Novo estudo",
    type: studyFields.type.value,
    dueDate: studyFields.date.value,
    description: studyFields.description.value.trim(),
    fileName,
    completed: false,
  };

  studies.unshift(study);
  persistStudies();
  renderStudies();
  if (studyFields.file) studyFields.file.value = "";
  if (studySaveStatus) studySaveStatus.textContent = `${study.title} foi publicado para a corrente.`;
}

function feedbackDateLabel(value) {
  return value ? formatDate(value.slice(0, 10)) : "Hoje";
}

function createFeedbackItem(feedback, adminView = false) {
  const item = document.createElement("article");
  item.className = "feedback-item positive";

  const recipient = findProfile(feedback.toId);
  const header = document.createElement("div");
  header.className = "feedback-header";

  const title = document.createElement("h3");
  title.textContent = adminView ? `${recipient?.name || "Perfil"} recebeu` : "Feedback positivo";

  const tag = document.createElement("span");
  tag.className = "tag confirmed";
  tag.textContent = "Anônimo";
  header.append(title, tag);

  const message = document.createElement("p");
  message.textContent = feedback.message;

  const meta = document.createElement("small");
  meta.textContent = adminView
    ? `Anônimo - ${feedbackDateLabel(feedback.createdAt)}`
    : `Recebido anonimamente - ${feedbackDateLabel(feedback.createdAt)}`;

  item.append(header, message, meta);
  return item;
}

function renderFeedbackRecipients() {
  if (!feedbackFields.recipient) return;

  const currentValue = feedbackFields.recipient.value;
  feedbackFields.recipient.textContent = "";

  orderedProfiles()
    .filter((profile) => !profile.leader)
    .forEach((profile) => {
      const option = document.createElement("option");
      option.value = profile.id;
      option.textContent = profile.name;
      feedbackFields.recipient.append(option);
    });

  if ([...feedbackFields.recipient.options].some((option) => option.value === currentValue)) {
    feedbackFields.recipient.value = currentValue;
  }
}

function renderFeedback() {
  renderFeedbackRecipients();

  const currentSelf = selfProfile();
  const selfFeedbacks = feedbacks.filter((feedback) => feedback.toId === currentSelf?.id);
  const selectedFeedbacks = feedbacks.filter((feedback) => feedback.toId === currentProfileId);

  if (feedbackFields.myPositiveList) {
    feedbackFields.myPositiveList.textContent = "";
    if (!selfFeedbacks.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "Ainda não há feedback positivo recebido.";
      feedbackFields.myPositiveList.append(empty);
    } else {
      selfFeedbacks.forEach((feedback) => feedbackFields.myPositiveList.append(createFeedbackItem(feedback)));
    }
  }

  if (feedbackFields.selectedProfileList) {
    feedbackFields.selectedProfileList.textContent = "";
    if (!selectedFeedbacks.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "Ainda não há feedback positivo neste perfil.";
      feedbackFields.selectedProfileList.append(empty);
    } else {
      selectedFeedbacks.forEach((feedback) => feedbackFields.selectedProfileList.append(createFeedbackItem(feedback)));
    }
  }

  if (feedbackFields.adminList) {
    feedbackFields.adminList.textContent = "";
    if (!feedbacks.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "Nenhum feedback positivo registrado.";
      feedbackFields.adminList.append(empty);
    } else {
      feedbacks.forEach((feedback) => feedbackFields.adminList.append(createFeedbackItem(feedback, true)));
    }
  }

  if (feedbackFields.myFeedbackCount) feedbackFields.myFeedbackCount.textContent = selfFeedbacks.length;
}

function sendFeedback() {
  const toId = feedbackFields.recipient?.value;
  const message = feedbackFields.message?.value.trim();
  if (!toId || !message) {
    if (feedbackFields.status) feedbackFields.status.textContent = "Escolha o médium e escreva o feedback.";
    return;
  }

  feedbacks.unshift({
    id: `feedback-${Date.now()}`,
    toId,
    message,
    createdAt: new Date().toISOString().slice(0, 10),
  });

  persistFeedbacks();
  feedbackFields.message.value = "";
  if (feedbackFields.status) feedbackFields.status.textContent = "Feedback anônimo enviado.";
  renderFeedback();
}

function renderForum() {
  if (!forumList) return;

  forumList.textContent = "";
  forumTopics.forEach((topic) => {
    const item = document.createElement("article");
    item.className = "forum-topic";

    const header = document.createElement("div");
    header.className = "feedback-header";
    const title = document.createElement("h3");
    title.textContent = topic.title;
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = `${topic.replies?.length || 0} respostas`;
    header.append(title, tag);

    const message = document.createElement("p");
    message.textContent = topic.message;

    const meta = document.createElement("small");
    meta.textContent = `${topic.author || "Anônimo"} - ${feedbackDateLabel(topic.createdAt)}`;

    const replies = document.createElement("div");
    replies.className = "forum-replies";
    (topic.replies || []).forEach((reply) => {
      const replyItem = document.createElement("article");
      replyItem.className = "forum-reply";
      const replyMessage = document.createElement("p");
      replyMessage.textContent = reply.message;
      const replyMeta = document.createElement("small");
      replyMeta.textContent = `${reply.author || "Anônimo"} - ${feedbackDateLabel(reply.createdAt)}`;
      replyItem.append(replyMessage, replyMeta);
      replies.append(replyItem);
    });

    const replyField = document.createElement("textarea");
    replyField.className = "forum-reply-field";
    replyField.placeholder = "Responder esta dúvida...";
    replyField.setAttribute("aria-label", `Responder ${topic.title}`);

    const replyButton = document.createElement("button");
    replyButton.className = "secondary-button";
    replyButton.type = "button";
    replyButton.textContent = "Responder";
    replyButton.addEventListener("click", () => addForumReply(topic.id, replyField.value));

    item.append(header, message, meta, replies, replyField, replyButton);
    forumList.append(item);
  });

  if (forumCount) forumCount.textContent = forumTopics.length;
  if (forumReplyCount) {
    forumReplyCount.textContent = forumTopics.reduce((total, topic) => total + (topic.replies?.length || 0), 0);
  }
}

function addForumTopic() {
  const title = forumFields.title?.value.trim();
  const message = forumFields.message?.value.trim();
  if (!title || !message) {
    if (forumStatus) forumStatus.textContent = "Escreva o título e a dúvida para publicar.";
    return;
  }

  forumTopics.unshift({
    id: `forum-${Date.now()}`,
    title,
    message,
    author: "Anônimo",
    createdAt: new Date().toISOString().slice(0, 10),
    replies: [],
  });

  persistForumTopics();
  forumFields.title.value = "";
  forumFields.message.value = "";
  if (forumStatus) forumStatus.textContent = "Dúvida publicada no fórum.";
  renderForum();
}

function addForumReply(topicId, message) {
  const topic = forumTopics.find((item) => item.id === topicId);
  const text = message.trim();
  if (!topic || !text) return;

  topic.replies = topic.replies || [];
  topic.replies.push({
    id: `reply-${Date.now()}`,
    message: text,
    author: "Anônimo",
    createdAt: new Date().toISOString().slice(0, 10),
  });

  persistForumTopics();
  renderForum();
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.screen));
});

document.querySelectorAll(".role-switch button").forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.textContent.trim() === "Admin" ? "admin" : "medium";
    setMode(mode);
  });
});

photoInput?.addEventListener("change", () => {
  const file = photoInput.files?.[0];
  const profile = findProfile(currentProfileId);
  if (!file || !profile) return;

  updateProfilePhoto(file, profile, () => {
    fillPhotoPreview(profile);
    renderAllProfiles();
    loadProfile(profile.id);
    renderSelfProfile();
  });
});

selfFields.photoInput?.addEventListener("change", () => {
  const file = selfFields.photoInput.files?.[0];
  const profile = selfProfile();
  if (!file || !profile) return;

  updateProfilePhoto(file, profile, () => {
    renderSelfProfile();
    renderAllProfiles();
    if (currentProfileId === profile.id) loadProfile(profile.id);
  });
});

document.querySelector("#save-profile-button")?.addEventListener("click", saveCurrentProfile);
document.querySelector("#new-profile-button")?.addEventListener("click", createNewProfile);
document.querySelector("#prev-profile-button")?.addEventListener("click", () => moveProfile(-1));
document.querySelector("#next-profile-button")?.addEventListener("click", () => moveProfile(1));
document.querySelector("#save-self-profile-button")?.addEventListener("click", saveSelfProfile);
document.querySelector("#add-study-button")?.addEventListener("click", addStudy);
document.querySelector("#add-event-button")?.addEventListener("click", addEvent);
document.querySelector("#add-supply-list-button")?.addEventListener("click", addSupplyList);
document.querySelector("#send-feedback-button")?.addEventListener("click", sendFeedback);
document.querySelector("#add-forum-topic-button")?.addEventListener("click", addForumTopic);
backupFields.exportButton?.addEventListener("click", exportLocalBackup);
backupFields.importInput?.addEventListener("change", () => importLocalBackup(backupFields.importInput.files?.[0]));
authLoginButton?.addEventListener("click", async () => {
  const email = authEmail?.value.trim();
  const password = authPassword?.value || "";
  if (!email || !password) {
    setAuthMessage("Informe o e-mail convidado e a senha");
    return;
  }

  const client = await getSupabaseClient();
  if (!client) return;
  setAuthMessage("Entrando...");
  const { error } = await client.auth.signInWithPassword({ email, password });
  if (error) {
    setAuthMessage("Convite/login não autorizado");
    return;
  }
  if (authPassword) authPassword.value = "";
  await refreshAuthState();
});
authLogoutButton?.addEventListener("click", async () => {
  const client = await getSupabaseClient();
  if (!client) return;
  await client.auth.signOut();
  remoteSession = null;
  await refreshAuthState();
});
authUploadButton?.addEventListener("click", uploadLocalDataToRemote);
calendarYear?.addEventListener("change", renderEvents);
document.querySelectorAll("[data-presence]").forEach((button) => {
  button.addEventListener("click", () => setEventPresence(button.dataset.presence));
});

renderEverything();
setMode("admin");
initSupabaseAuth().catch((error) => {
  console.error(error);
  setAuthMessage("Supabase indisponível");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
