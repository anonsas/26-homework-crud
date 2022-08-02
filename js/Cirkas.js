class Cirkas {
  #name = '"Besieliai"';
  #list = [];
  constructor() {
    //prettier-ignore
    this.months = ['Sausio', 'Vasario', 'Kovo', 'Balandzio',
    'Geguzes', 'Birzelio', 'Liepos', 'Rugpjucio',
    'Rugsejo', 'Spalio', 'Lapkricio', 'Gruodzio'];
  }

  intro() {
    return `Sveiki atvyke i ${this.#name} cirka!`;
  }

  tvarkarastis() {
    let title = `${this.#name} cirko tvarkarastis:`;

    if (this.#list.length === 0) {
      title += `\nSiuo metu pasirodymu nera suplanuota.`;
    }

    this.#list.sort((a, b) => a.mili - b.mili);

    for (const item of this.#list) {
      let res = `\n${item.year} ${this.months[item.month - 1]} ${item.day}`;
      title += item.mili < Date.now() ? (res += 'd (jau įvykęs)') : res;
    }

    return title;
  }

  naujasPasirodymas(year, month, day) {
    const mili = new Date(year, month - 1, day).getTime();
    this.#list.push({ year, month, day, mili });
    return `Naujas pasirodymas ${year} ${this.months[month - 1]} ${day} dieną!`;
  }

  pakeistiData(index, year, month, day) {
    this.#list[index - 1] = {
      year,
      month,
      day,
      mili: new Date(year, month - 1, day).getTime(),
    };
    return `Pasirodymo data pakeista į ${year} ${this.months[month - 1]} ${day} dieną!`;
  }

  atsauktiPasirodyma(index) {
    let response = '';
    let item = this.#list[index - 1];

    if (item.mili < Date.now()) {
      response += `Atsaukti jau praejusio pasirodymo negalima!`;
    } else {
      response += `Pasirodymas atsauktas (${item.year} ${this.months[item.month - 1]} ${
        item.day
      }d)!`;

      this.#list.splice(index - 1, 1);
    }

    return response;
  }
}

export { Cirkas };
