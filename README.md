# Throne of Glass Quotes API

This Node.js Express.js API serves quotes from the Throne of Glass series by Sarah J. Maas.

## Features:

- Get a random quote.
- Retrieve all quotes.
- Access individual quotes by ID (starting from 1).

## Deployment:

This API is hosted on Cyclic at [link to Cyclic deployment].

## Endpoints:

- **Random Quote:**
    - URL: [https://throneofglass.cyclic.app/random/](https://throneofglass.cyclic.app/random/)
    - Response: A random quote object.

- **All Quotes:**
    - URL: [https://throneofglass.cyclic.app/quotes/](https://throneofglass.cyclic.app/quotes/)
    - Response: An array containing all quotes.

- **Quote by ID:**
    - URL: [https://throneofglass.cyclic.app/{id}](https://throneofglass.cyclic.app/{id}) (replace `{id}` with the desired quote ID)
    - Response: The quote object for the specified ID. If the ID is invalid, an error object with the message "No quote" is returned.

### Example Quote:
```json
{
  "quote": "Her mother placed a phantom hand over Aelin’s heart. It is the strength of this that matters. No matter where you are, no matter how far, this will lead you home."
}

## Error Handling:

If an invalid ID is used to access a quote, the API will return an error object with the message "No quote".

Enjoy!

Feel free to use this API in your projects or simply browse the quotes for a touch of Throne of Glass inspiration.

