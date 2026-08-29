export const LiveProjectButton = ({ url, testId }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testId}
    className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-5 py-2 sm:px-10 sm:py-3.5 text-xs sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-300 whitespace-nowrap"
  >
    Live Project
  </a>
);
