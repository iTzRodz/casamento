export function Maps() {
  return (
    <section className="flex h-[400px] w-full justify-start border-none px-5 mobile:justify-center">
      <div className="relative size-full mobile:max-w-4xl">
        <iframe
          title="Local do casamento"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.0782938399702!2d-49.8921306!3d-22.237107999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bfda891ec49ce9%3A0x84d9f6e557f974c5!2sCh%C3%A1cara%20SAN%20RAFAEL!5e0!3m2!1spt-BR!2sbr!4v1741741755480!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          style={{ textDecoration: "none" }}
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute left-0 top-0 size-full rounded-lg border-none"
        ></iframe>
      </div>
    </section>
  );
}
