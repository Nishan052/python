import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler


import pandas as pd

df = pd.read_csv("/Users/nishan/Downloads/Mall_Customers.csv")  # Change path accordingly
print(df.head())

# Drop CustomerID as it's not useful for clustering
df.drop("CustomerID", axis=1, inplace=True)

# Check for missing values
print(df.isnull().sum())  # No missing values in this dataset

# Convert Gender into numerical values (Male: 1, Female: 0)
df["Gender"] = df["Gender"].map({"Male": 1, "Female": 0})

scaler = StandardScaler()
scaled_data = scaler.fit_transform(df)

# Convert back to DataFrame for better visualization
df_scaled = pd.DataFrame(scaled_data, columns=df.columns)
df_scaled.head()

# Find the optimal number of clusters using the Elbow Method
wcss = []  # Within-cluster sum of squares

for i in range(1, 11):  # Try K values from 1 to 10
    kmeans = KMeans(n_clusters=i, init='k-means++', random_state=42)
    kmeans.fit(df_scaled)
    wcss.append(kmeans.inertia_)  # Append WCSS (inertia)

# Plot the Elbow curve
plt.figure(figsize=(8,5))
plt.plot(range(1, 11), wcss, marker='o', linestyle='--')
plt.xlabel("Number of Clusters (K)")
plt.ylabel("WCSS")
plt.title("Elbow Method for Optimal K")
plt.show()

# Apply K-Means with optimal K
kmeans = KMeans(n_clusters=5, init='k-means++', random_state=42)
df_scaled["Cluster"] = kmeans.fit_predict(df_scaled)

# Add cluster labels to the original dataset
df["Cluster"] = df_scaled["Cluster"]

df.head()

# Reduce dimensions to 2 using PCA for visualization
pca = PCA(n_components=2)
df_pca = pca.fit_transform(df_scaled.iloc[:, :-1])

# Convert to DataFrame
df_pca = pd.DataFrame(df_pca, columns=["PC1", "PC2"])
df_pca["Cluster"] = df_scaled["Cluster"]

# Plot Clusters
plt.figure(figsize=(8, 6))
sns.scatterplot(x="PC1", y="PC2", hue="Cluster", palette="viridis", data=df_pca, s=100)
plt.title("Customer Segmentation (K-Means Clustering)")
plt.xlabel("Principal Component 1")
plt.ylabel("Principal Component 2")
plt.legend(title="Cluster")
plt.show()

sns.pairplot(df, hue="Cluster", palette="viridis")
plt.show()

